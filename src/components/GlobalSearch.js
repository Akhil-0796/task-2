import React from "react";

export const GlobalSearch = ({ input, setInput }) => {
  return (
    <span>
      <center><br/><br/>
        <input
          style={{
            width: "20%",
            paddingLeft: "8px",
            paddingTop: "6px",
            paddingBottom: "6px",
          }}
          placeholder="Search Here"
          value={input || ""}
          onChange={(val) => setInput(val.target.value)}
        /><br/><br/>
      </center>
    </span>
  );
};
