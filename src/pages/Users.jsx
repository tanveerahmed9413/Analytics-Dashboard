import React, { useState } from "react";
import TableData from "../components/tables/TableData";
import { tableData } from "../data/tableData";

const Users = ({ data, setData, allData, setAllData }) => {
  return (
    <TableData
      data={data}
      setData={setData}
      allData={allData}
      setAllData={setAllData}
    />
  );
};

export default Users;
