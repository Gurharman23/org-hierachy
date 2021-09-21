import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import EmployeeForm from "./EmployeeForm";
import { saveEmployee } from "../../redux/actions/employeeActions";
import { toast } from "react-toastify";

function ManageEmployee({ employees, saveEmployee, ...props }) {
  const [employee, setEmployee] = useState({
    name: "",
    title: "",
    parent: 0,
  });
  const [errors, setErrors] = useState({});

  function handleChange({ target }) {
    setEmployee({ ...employee, [target.name]: target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid()) return;

    saveEmployee({
      ...employee,
      parent: +employee.parent,
    }).then(() => {
      toast.success("New member created ", { hideProgressBar: true });
      props.history.push("/");
    });
  }

  function isFormValid() {
    if (employee.name.length === 0) {
      setErrors({ name: "Please enter name" });
      return false;
    }
    if (employee.title.length === 0) {
      setErrors({ title: "Please enter title" });
      return false;
    }
    if (+employee.parent <= 1) {
      setErrors({ parent: "Please enter valid parent id" });
      return false;
    }
    return true;
  }

  return (
    <div className="position-absolute top-0 vw-100 d-flex justify-content-center align-items-center vh-100">
      <div
        style={{
          minWidth: "18rem",
          marginTop: "-8rem",
        }}
      >
        <h1>Add New Employee</h1>
        <EmployeeForm
          employee={employee}
          errors={errors}
          valueChange={handleChange}
          submit={handleSubmit}
        />
      </div>
    </div>
  );
}

function mapStateToProp({ employees }) {
  return { employees };
}
const mapDispatchToProps = {
  saveEmployee,
};

export default connect(mapStateToProp, mapDispatchToProps)(ManageEmployee);
