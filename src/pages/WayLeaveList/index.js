import React, { memo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../Components/HeaderComponent";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import TuneIcon from "@mui/icons-material/Tune";
import "../WayLeaveList/wayLeaveList.css";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const rows = [
  {
    id: 1,
    wayleave_id: "W3284.0001",
    route_id: "R3284",
    proprietor_id: "P305699",
    proprietor_name: "Yuki Nakamura",
    proprietor_address: "18, Stockwell Close, Bromley",
    stage: "Letter 1",
    criticality: "3",
  },
  {
    id: 2,
    wayleave_id: "W3284.0002",
    route_id: "R3284",
    proprietor_id: "P305699",
    proprietor_name: "Yuki Nakamura",
    proprietor_address: "18, Stockwell Close, Bromley",
    stage: "Not yet Connected",
    criticality: "4",
  },
  {
    id: 3,
    wayleave_id: "W3284.0003",
    route_id: "R3284",
    proprietor_id: "P305699",
    proprietor_name: "Yuki Nakamura",
    proprietor_address: "18, Stockwell Close, Bromley",
    stage: "Unreachable",
    criticality: "3",
  },
  {
    id: 4,
    wayleave_id: "W3284.0004",
    route_id: "R3284",
    proprietor_id: "P305699",
    proprietor_name: "Yuki Nakamura",
    proprietor_address: "18, Stockwell Close, Bromley",
    stage: "Letter 2",
    criticality: "6",
  },
  {
    id: 5,
    wayleave_id: "W3284.0005",
    route_id: "R3284",
    proprietor_id: "P305699",
    proprietor_name: "Yuki Nakamura",
    proprietor_address: "18, Stockwell Close, Bromley",
    stage: "Letter 1",
    criticality: "9",
  },
  {
    id: 6,
    wayleave_id: "W3284.0006",
    route_id: "R3284",
    proprietor_id: "P305699",
    proprietor_name: "Yuki Nakamura",
    proprietor_address: "18, Stockwell Close, Bromley",
    stage: "Contract Signed",
    criticality: "3",
  },
  {
    id: 7,
    wayleave_id: "W3284.0007",
    route_id: "R3284",
    proprietor_id: "P305699",
    proprietor_name: "Yuki Nakamura",
    proprietor_address: "18, Stockwell Close, Bromley",
    stage: "Contract being Reviewed",
    criticality: "2",
  },
  {
    id: 8,
    wayleave_id: "W3284.0007",
    route_id: "R3284",
    proprietor_id: "P305699",
    proprietor_name: "Yuki Nakamura",
    proprietor_address: "18, Stockwell Close, Bromley",
    stage: "Contract being Reviewed",
    criticality: "2",
  },
  {
    id: 9,
    wayleave_id: "W3284.0007",
    route_id: "R3284",
    proprietor_id: "P305699",
    proprietor_name: "Yuki Nakamura",
    proprietor_address: "18, Stockwell Close, Bromley",
    stage: "Contract Signed",
    criticality: "2",
  },
  {
    id: 10,
    wayleave_id: "W3284.0007",
    route_id: "R3284",
    proprietor_id: "P305699",
    proprietor_name: "Yuki Nakamura",
    proprietor_address: "18, Stockwell Close, Bromley",
    stage: "Contract being Reviewed",
    criticality: "2",
  },
  {
    id: 11,
    wayleave_id: "W3284.0007",
    route_id: "R3284",
    proprietor_id: "P305699",
    proprietor_name: "Yuki Nakamura",
    proprietor_address: "18, Stockwell Close, Bromley",
    stage: "Contract Signed",
    criticality: "2",
  },
  {
    id: 12,
    wayleave_id: "W3284.0007",
    route_id: "R3284",
    proprietor_id: "P305699",
    proprietor_name: "Yuki Nakamura",
    proprietor_address: "18, Stockwell Close, Bromley",
    stage: "Letter 1",
    criticality: "2",
  },
];
const WayLeaveList = () => {
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
      width: 300,
      maxWidth: 300,
      sortable: false,
    },
    {
      field: "stage",
      headerName: "Stage",
      width: 210,
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
                <div>{params.row.stage}</div>
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
