import * as fs from "fs";

import GitHub from "github-api";

import { organizations } from "./organizations.js";

/*
 * Process accounts
 */

let hasToken = false;
const auth = {
  token: ""
};

if (process.env.GH_TOKEN && process.env.GH_TOKEN !== "") {
  hasToken = true;
  auth.token = process.env.GH_TOKEN;
} else {
  console.log("No GH_TOKEN provided.");
}

const gh = hasToken
  ? new GitHub(auth)
  : new GitHub();

const data = [];

let outstandingCount = 0;

for (const organization of organizations) {

  console.log("Processing " + organization.title + " (" + organization.handle + ")...");

  const ghOrganization = gh.getOrganization(organization.handle);

  if (!ghOrganization) {
    console.log("\t-Organization not available.");
    continue;
  }

  outstandingCount += 1;

  ghOrganization.getRepos((err, repos) => {

    const organizationData = {
      handle: organization.handle,
      title: organization.title,
      repositories: 0,
      stars: 0,
      forks: 0
    };

    for (const repo of repos) {
      if (!repo.private) {
        organizationData.repositories += 1;
      }
      organizationData.stars += repo.stargazers_count;
      organizationData.forks += repo.forks;
    }

    data.push(organizationData);

    outstandingCount -= 1;
  });
}

while (outstandingCount > 0) {
  console.log("Waiting for " + outstandingCount + " queries to finish...");
  await new Promise(resolve => setTimeout(resolve, 2000));
}

data.sort((organizationA, organizationB) => {

  if (organizationA.stars !== organizationB.stars) {
    return organizationB.stars - organizationA.stars;

  }
  else if (organizationA.repositories !== organizationB.repositories) {
    return organizationB.repositories - organizationA.repositories;
  }
  else if (organizationA.handle < organizationB.handle) {
    return 1;
  }
  else {
    return 1;
  }
});

const outputData = {
  organizations: data,
  refreshMillis: Date.now()
};

try {
  fs.writeFile("./data.json", JSON.stringify(outputData), {}, () => {
    console.log("Data written for " + data.length.toString() + " municipalities.");
    return true;
  });
} catch (error) {
  console.error(error);
}
