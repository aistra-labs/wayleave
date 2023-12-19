import React, { memo } from "react";
import { DataGrid, GridPagination } from "@mui/x-data-grid";
import Header from "../../Components/HeaderComponent";
import Button from "@mui/material/Button";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import TuneIcon from "@mui/icons-material/Tune";
import "../WayLeaveList/wayLeaveList.css";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "wayleave_id", headerName: "Wayleave ID", width: 70 },
  { field: "route_id", headerName: "Route ID", width: 130 },
  { field: "proprietor_id", headerName: "Proprietor ID", width: 130 },
  { field: "proprietor_name", headerName: "Proprietor Name", width: 90 },
  { field: "proprietor_address", headerName: "Propreitor Address", width: 160 },
  {
    field: "stage",
    headerName: "Stage",
    // description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 90,
    renderCell: (params) => {
      const isActive = params.stage;
      return <>{isActive ? <div>test</div> : <div>no</div>}</>;
    },
  },
  { field: "criticality", headerName: "Criticality", width: 90 },
];

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
];
const WayLeaveList = () => {
  const pageSize = 5; // Set your desired page size
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(pageSize);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="wayleave-managment-container">
      <Header title={"Wayleave"} />
      <div className="managment-header">
        <div className="managment-title">Wayleave Management System</div>
        <div className="managment-button-Wrapper">
          <div className="search">
            <IconButton
              type="button"
              sx={{ p: "8px" }}
              aria-label="search"
              style={{ height: "40px" }}
              //   className="search-inner"
            >
              <SearchIcon />
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="search"
                inputProps={{ "aria-label": "search" }}
                style={{ height: "40px" }}
              />
            </IconButton>
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
        <div style={{ height: 400, width: "100%" }}>
          <div>
            <GridPagination
              component="div"
              count={rows.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={rowsPerPage}
              pagination
              page={page}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[5, 10]}
              components={{
                Pagination: (props) => (
                  <GridPagination
                    {...props}
                    component="div"
                    count={rows.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(WayLeaveList);
