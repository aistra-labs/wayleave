import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const WayLeaveDetails = lazy(() => import("./pages/WayLeaveDetails"));
// const Header = lazy(() => import("./Components/HeaderComponent"));
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/wayleave" element={<WayLeaveDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
