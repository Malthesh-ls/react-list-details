const mockRespUniversityData = [
  {
    "state-province": "Abu Dhabi",
    "domains": [
      "mbzuai.ac.ae"
    ],
    "web_pages": [
      "https://mbzuai.ac.ae/"
    ],
    "name": "Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)",
    "alpha_two_code": "AE",
    "country": "United Arab Emirates"
  },
  {
    "domains": [
      "acd.ac.ae"
    ],
    "country": "United Arab Emirates",
    "state-province": null,
    "alpha_two_code": "AE",
    "web_pages": [
      "http://www.acd.ac.ae/"
    ],
    "name": "American College Of Dubai"
  },
];

const mockUniversityData = [
  {
    "state_province": "Abu Dhabi",
    "domains": [
      "mbzuai.ac.ae"
    ],
    "web_pages": [
      "https://mbzuai.ac.ae/"
    ],
    "name": "Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)",
    "alpha_two_code": "AE",
    "country": "United Arab Emirates",
    "uid": 1
  },
  {
    "domains": [
      "acd.ac.ae"
    ],
    "country": "United Arab Emirates",
    "state_province": null,
    "alpha_two_code": "AE",
    "web_pages": [
      "http://www.acd.ac.ae/"
    ],
    "name": "American College Of Dubai",
    "uid": 3
  },
];

const mockColumns = [
  { "label": "Name", "accessor": "name", "sortable": true, "sortbyOrder": "asc" },
  { "label": "Alpha Code", "accessor": "alpha_two_code", "sortable": true, },
  { "label": "State Province", "accessor": "state_province", "sortable": true },
  { "label": "Country", "accessor": "country", "sortable": true },
  { "label": "Action", "accessor": "action", "sortable": false },
];

export {
  mockRespUniversityData,
  mockUniversityData,
  mockColumns,
}