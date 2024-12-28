import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./ReactTableColumns";
import MOCK_DATA from "./MOCK_DATA.json";
import "./ReactTableStylesheet1.css";

const ReactTableSortingTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
    },
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = tableInstance;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            const { key, ...headerProps } = headerGroup.getHeaderGroupProps();
            return (
              <tr key={key} {...headerProps}>
                {headerGroup.headers.map((column) => (
                  <th
                    key={column.id}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const { key, ...rowProps } = row.getRowProps();
            return (
              <tr key={key} {...rowProps}>
                {row.cells.map((cell) => {
                  const { key, ...cellProps } = cell.getCellProps();
                  return (
                    <td key={key} {...cellProps}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => {
            const { key, ...footerProps } = footerGroup.getFooterGroupProps();
            return (
              <tr key={key} {...footerProps}>
                {footerGroup.headers.map((column) => (
                  <td key={column.id} {...column.getFooterProps()}>
                    {column.render("Footer")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tfoot>
      </table>
    </>
  );
};

export default ReactTableSortingTable;
