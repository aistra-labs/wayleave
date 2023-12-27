import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WayLeaveDashboard from "./pages/WayLeaveDashboard";
const WayLeaveList = lazy(() => import("./pages/WayLeaveList"));
const WayLeaveDetails = lazy(() => import("./pages/WayLeaveDetails"));
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/wayleave" element={<WayLeaveList />} />
            <Route path="/wayleave/:id" element={<WayLeaveDetails />} />
            <Route path="/wayleave/dashboard" element={<WayLeaveDashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
