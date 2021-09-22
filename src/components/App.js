import React from "react";
import { Route, Switch } from "react-router";
import { ToastContainer } from "react-toastify";
import EmployeesPage from "./employees/EmployeesPage";
import ManageEmployee from "./employees/MangeEmployee";
import PromoteEmployee from "./employees/PromoteEmployee";

export default function App() {
  return (
    <>
      <ToastContainer autoClose={3000} hideProgressBar />
      <ToastContainer />
      <Switch>
        <Route path="/employee" component={ManageEmployee}></Route>
        <Route path="/promote/:id" component={PromoteEmployee}></Route>
        <Route path="/" component={EmployeesPage}></Route>;
      </Switch>
    </>
  );
}
