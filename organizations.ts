interface Organization {
  handle: string;
  municipality: string;
  province: "Alberta" | "British Columbia" | "Ontario" | "Quebec";
  latitude: number;
  longitude: number;
}

export const organizations: Organization[] = [
  {
    handle: "CityOfEdmonton",
    municipality: "City of Edmonton",
    province: "Alberta",
    latitude: 53.5461,
    longitude: -113.4938,
  },
  {
    handle: "cityofgreatersudbury",
    municipality: "City of Greater Sudbury",
    province: "Ontario",
    latitude: 46.4917,
    longitude: -80.9917,
  },
  {
    handle: "cityofkamloops",
    municipality: "City of Kamloops",
    province: "British Columbia",
    latitude: 50.6745,
    longitude: -120.3273,
  },
  {
    handle: "CityOfLangford",
    municipality: "City of Langford",
    province: "British Columbia",
    latitude: 48.4481,
    longitude: -123.5054,
  },
  {
    handle: "cityofottawa",
    municipality: "City of Ottawa",
    province: "Ontario",
    latitude: 45.4215,
    longitude: -75.6972,
  },
  {
    handle: "CityofRichmond",
    municipality: "City of Richmond",
    province: "British Columbia",
    latitude: 49.1666,
    longitude: -123.1336,
  },
  {
    handle: "CityOfSarnia",
    municipality: "City of Sarnia",
    province: "Ontario",
    latitude: 42.9994,
    longitude: -82.3089,
  },
  {
    handle: "cityofsurrey",
    municipality: "City of Surrey",
    province: "British Columbia",
    latitude: 49.1913,
    longitude: -122.8490,
  },
  {
    handle: "CityofToronto",
    municipality: "City of Toronto",
    province: "Ontario",
    latitude: 43.6532,
    longitude: -79.3832,
  },
  {
    handle: 'cityofvancouver',
    municipality: 'City of Vancouver',
    province: 'British Columbia',
    latitude: 49.2827,
    longitude: -123.1207,
  },
  {
    handle: "CityOfVictoria",
    municipality: "City of Victoria",
    province: "British Columbia",
    latitude: 48.4284,
    longitude: -123.3656,
  },
  {
    handle: "cityssm",
    municipality: "City of Sault Ste. Marie",
    province: "Ontario",
    latitude: 46.5197,
    longitude: -84.3421,
  },
  {
    handle: "Clearwater-County",
    municipality: "Clearwater County",
    province: "Alberta",
    latitude: 52.9733,
    longitude: -114.9211,
  },
  {
    handle: "rocky-view-county",
    municipality: "Rocky View County",
    province: "Alberta",
    latitude: 51.1784,
    longitude: -113.9066,
  },
  {
    handle: "RegionofPeel",
    municipality: "Region of Peel",
    province: "Ontario",
    latitude: 43.6667,
    longitude: -79.7500,
  },
  {
    handle: "soreltracy",
    municipality: "Ville de Sorel-Tracy",
    province: "Quebec",
    latitude: 46.0428,
    longitude: -73.1151,
  },
  {
    handle: "Ville-La-Tuque",
    municipality: "Ville de La Tuque",
    province: "Quebec",
    latitude: 47.4331,
    longitude: -72.7821,
  },
  {
    handle: "villelaval",
    municipality: "Ville de Laval",
    province: "Quebec",
    latitude: 45.6066,
    longitude: -73.7124,
  },
  {
    handle: "VilledeMontreal",
    municipality: "Ville de Montréal",
    province: "Quebec",
    latitude: 45.5017,
    longitude: -73.5673,
  },
];
