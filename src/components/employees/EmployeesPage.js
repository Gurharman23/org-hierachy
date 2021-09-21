import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  loadEmployees,
  deleteEmployee,
} from "../../redux/actions/employeeActions";
import EmployeeHierarchy from "./EmployeeHierarchy";

function EmployeesPage({ employees, loadEmployees, deleteEmployee, ...props }) {
  useEffect(() => {
    if (employees.length === 0)
      loadEmployees().then(() =>
        console.log("=========employees loaded========")
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDelete(employee) {
    deleteEmployee(employee).then(() => {
      toast.success("Deleted ", { hideProgressBar: true });
    });
  }

  function changeRoute(id) {
    props.history.push("/promote/" + id);
  }

  return (
    <div>
      <div className="d-flex justify-content-center mt-3 w-100">
        <h2>Serenity's Hierarchy</h2>
        <Link className="btn btn-primary mx-3" to="/employee">
          Add Employee
        </Link>
      </div>
      <EmployeeHierarchy
        employees={employees}
        deleteEmployee={handleDelete}
        changeRoute={changeRoute}
      />
    </div>
  );
}
function mapStateToProps({ employees }) {
  return { employees };
}
const mapDispatchToProps = {
  loadEmployees,
  deleteEmployee,
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeesPage);
