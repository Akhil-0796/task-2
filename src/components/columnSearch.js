import React from "react";

export const columnSearch = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <span>
      <input
        style={{
          width: "20%",
          paddingLeft: "2px",
          paddingTop: "2px",
          paddingBottom: "2px",
        }}
        placeholder="Search.."
        value={filterValue || ""}
        onChange={(val) => setFilter(val.target.value)}
      />
    </span>
  );
};
