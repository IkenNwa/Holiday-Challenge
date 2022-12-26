import React from "react";
import { Routes, Route } from "react-router-dom";
import AddNew from "./AddNew";
import Dashboard from "./Dashboard";
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

        </Route>
        <Route path="/addNew" element={<AddNew />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Router;
