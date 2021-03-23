import { columnSearch } from "./columnSearch";

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
    Filter: columnSearch,
    disableFilters:true,
  },
  {
    Header: "NAME",
    accessor: "name",
    Filter: columnSearch,
    disableFilters:true,
  },
  {
    Header: "TYPE",
    accessor: "type",
    Filter: columnSearch,
    disableFilters:true,
  },
  {
    Header: "CODE",
    accessor: "code",
    Filter: columnSearch,
    disableFilters:true,
  },
  {
    Header: "CLUSTER",
    accessor: "cluster",
    Filter: columnSearch,
  },
  {
    Header: "CITY",
    accessor: "city",
    Filter: columnSearch,
  },
  {
    Header: "SPACE AVAILABLE",
    accessor: "space_available",
    Filter: columnSearch,
  }
];
