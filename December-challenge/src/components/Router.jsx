import React from "react";
import { Routes, Route } from "react-router-dom";
import AddNew from "./AddNew";
import BPPage from "./BPPage";
import HRPage from "./HRPage";
import BCPage from "./BCPage"
import Dashboard from "./Dashboard";
import Greeting from "./Greeting";
import BSPage from "./BSPage"
import Login from "./Login";
import PageNotFound from "./PageNotFound";
import Tests from "./Tests";


function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tests" element={<Tests/>}>
          <Route index element={<Greeting />} />
          <Route path="/tests/bp" element={<BPPage />} />
          <Route path="/tests/bs" element={<BSPage />} />
          <Route path="/tests/hr" element={<HRPage />} />
          <Route path="/tests/bc" element={<BCPage />} />
        </Route>
        <Route path="/addNew" element={<AddNew />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
