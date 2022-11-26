import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Authentication } from "../../services/authentication";
import axios from "axios";

function Dashboard() {
  const [myArray, updateMyArray] = useState([]);

  useEffect(() => {
    document.title = "Dashboard";
    const id = Authentication.userId;
    axios
      .get(`http://localhost:9000/myPatients`, {
        params: {
          id: id,
        },
      })
      .then((res) => {
        const result = res.data;
        updateMyArray(result);
      });
  }, []);

  const columns = [
    {
      name: "Name",
      sortable: true,
      cell: (row) => (
        <div>
          {row.firstName} {row.lastName}
        </div>
      ),
    },
    {
      name: "Address",
      cell: (row) => (
        <div>
          {row.address}, {row.city}, {row.country}, {row.postalCode}
        </div>
      ),
    },
    {
      name: "Phone",
      cell: (row) => <div>{row.phone}</div>,
      sortable: true,
    },
  ];

  const onRowClicked = (e) => {
    e.preventDefault();
    console.log("row", e.target.value);
  };

  if (myArray.length === 0) {
    return (
      <div>
        <DataTable className="mt-3" pagination highlightOnHover />
      </div>
    );
  } else {
    return (
      <DataTable
        //   onRowClicked={onRowClicked}
        columns={columns}
        data={myArray}
        highlightOnHover
      />
    );
  }
}

export default Dashboard;
