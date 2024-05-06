const Constants = {
  API_HOST: 'http://universities.hipolabs.com',
};

const columns = [
  { label: "Name", accessor: "name", sortable: true, sortbyOrder: "asc" },
  { label: "Alpha Code", accessor: "alpha_two_code", sortable: true, },
  { label: "State Province", accessor: "state_province", sortable: true },
  { label: "Country", accessor: "country", sortable: true },
  { label: "Action", accessor: "action", sortable: false },
];

export {
  Constants,
  columns,
};