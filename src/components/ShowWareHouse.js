import React, { useMemo, useState, useEffect } from "react";
import {
  useTable,
  useGlobalFilter,
  usePagination,
  useFilters,
} from "react-table";
import { GlobalSearch } from "./GlobalSearch";
import "./table.css";
//import data from './data/data.json';
import { COLUMNS } from "./columns";
import { dataApi } from "./exportData/dataApi";
import { Link } from "react-router-dom";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { Modal, Button } from "react-bootstrap";

export const ShowWareHouse = (props) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    dataApi().then((data) => {
      setUserList(data);
      console.log(data);
    });
  }, []);

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => userList, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    setPageSize,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  function hello(cell) {
    console.log(cell);
  }

  const [list, setList] = useState([]);

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <GlobalSearch input={globalFilter} setInput={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <span>
          <select
            value={pageSize}
            onChange={(event) => setPageSize(Number(event.target.value))}
          >
            {[2, 3, 4, 6, 8].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>

        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </>
  );
};
