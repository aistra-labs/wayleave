import React, { memo, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../Components/HeaderComponent";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import TuneIcon from "@mui/icons-material/Tune";
import "../WayLeaveList/wayLeaveList.css";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import apiRequest from "../../Components/api/api";

const WayLeaveList = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    getWayleaveList();
  }, []);

  const getWayleaveList = async () => {
    const url = "get/all";
    const data = {};
    const result = await apiRequest(url, "POST", data);
    const rows = result.data.map((item) => ({
      id: item.wayLeaveId, // Assuming "wayLeaveId" should be used as "id"
      wayleave_id: item.id,
      route_id: item.id, // You might need to adjust this based on your actual data
      proprietor_id: item.details.propreitorId,
      proprietor_name: item.landLordName,
      proprietor_address: item.details.propreitorAddress,
      stage: item.details.currentState,
      criticality: item.details.criticality,
    }));
    setRows(rows);
    console.log(result, "result");
  };

  const getStagecolor = (stage) => {
    switch (stage) {
      case "Letter 1":
        return "#0797FF";
        // code to execute if expression equals value1
        break;
      case "Unreachable":
        return "#EB6262";
        break;
      case "Contract Signed":
        return "#5DB055";
        break;
      case "Contract being Reviewed":
        break;
      // ... more cases
      default:
      // code to execute if expression doesn't match any case
    }
  };
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "wayleave_id",
      headerName: "Wayleave ID",
      width: 150,
      sortable: false,
      className: "custom-heading",
    },
    {
      field: "route_id",
      headerName: "Route ID",
      width: 130,
      sortable: false,
      className: "custom-heading",
    },
    {
      field: "proprietor_id",
      sortable: false,
      headerName: "Proprietor ID",
      width: 150,
    },
    {
      field: "proprietor_name",
      sortable: false,
      headerName: "Proprietor Name",
      width: 230,
    },
    {
      field: "proprietor_address",
      headerName: "Propreitor Address",
      width: 250,
      maxWidth: 250,
      sortable: false,
    },
    {
      field: "stage",
      headerName: "Stage",
      width: 180,
      // description: "This column has a value getter and is not sortable.",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            {
              <div className="stage-cell">
                <li
                  className="stage-status-color"
                  style={{ color: getStagecolor(params.row.stage) }}
                ></li>
                <div className="stage-text">{params.row.stage}</div>
              </div>
            }
          </>
        );
      },
    },
    {
      field: "criticality",
      sortable: false,
      headerName: "Criticality",
      width: 130,
    },
  ];
  return (
    <div className="wayleave-managment-container">
      <Header title={"Wayleave"} />
      <div className="managment-header">
        <div className="managment-title">Wayleave Management System</div>
        <div className="managment-button-Wrapper">
          <div className="search">
            <SearchIcon />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="search"
              inputProps={{ "aria-label": "search" }}
              style={{ height: "40px" }}
            />
          </div>
          <div className="buttons-box">
            <Button
              variant="outlined"
              startIcon={<FilterAltIcon />}
              style={{ height: "40px" }}
            >
              Filter
            </Button>
            <Button
              variant="outlined"
              startIcon={<TuneIcon />}
              style={{ height: "40px" }}
            >
              Sort
            </Button>
          </div>
        </div>
      </div>
      <div className="managment-list-box">
        <div style={{ width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 20]}
            checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};
export default memo(WayLeaveList);
