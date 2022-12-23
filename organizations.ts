interface Organization {
  handle: string;
  municipality: string;
  province: "Alberta" | "British Columbia" | "Ontario" | "Quebec";
}

export const organizations: Organization[] = [
  {
      handle: "CityOfEdmonton",
      municipality: "City of Edmonton",
      province: "Alberta"
  }, {
      handle: "cityofgreatersudbury",
      municipality: "City of Greater Sudbury",
      province: "Ontario",
  }, {
      handle: "cityofkamloops",
      municipality: "City of Kamloops",
      province: "British Columbia"
  }, {
      handle: "CityOfLangford",
      municipality: "City of Langford",
      province: "British Columbia"
  }, {
      handle: "cityofottawa",
      municipality: "City of Ottawa",
      province: "Ontario"
  }, {
      handle: "CityofRichmond",
      municipality: "City of Richmond",
      province: "British Columbia"
  }, {
      handle: "CityOfSarnia",
      municipality: "City of Sarnia",
      province: "Ontario"
  }, {
      handle: "cityofsurrey",
      municipality: "City of Surrey",
      province: "British Columbia"
  }, {
      handle: "CityofToronto",
      municipality: "City of Toronto",
      province: "Ontario"
  }, {
      handle: "CityOfVictoria",
      municipality: "City of Victoria",
      province: "British Columbia"
  }, {
      handle: "cityssm",
      municipality: "City of Sault Ste. Marie",
      province: "Ontario"
  }, {
      handle: "Clearwater-County",
      municipality: "Clearwater County",
      province: "Alberta"
  }, {
      handle: "Guelph-Digital-Service",
      municipality: "City of Guelph",
      province: "Ontario"
  }, {
      handle: "rocky-view-county",
      municipality: "Rocky View County",
      province: "Alberta"
  }, {
      handle: "RegionofPeel",
      municipality: "Region of Peel",
      province: "Ontario"
  }, {
      handle: "soreltracy",
      municipality: "Ville de Sorel-Tracy",
      province: "Quebec"
  }, {
      handle: "Ville-La-Tuque",
      municipality: "Ville de La Tuque",
      province: "Quebec"
  }, {
      handle: "villelaval",
      municipality: "Ville de Laval",
      province: "Quebec"
  }, {
      handle: "VilledeMontreal",
      municipality: "Ville de Montréal",
      province: "Quebec"
  }
];
