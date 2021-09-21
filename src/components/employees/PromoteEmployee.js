import React from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { updateEmployee } from "../../redux/actions/employeeActions";
import PromoteForm from "./PromoteForm";

function PromoteEmployee({ employees, updateEmployee, match, ...props }) {
  const [employee, setEmployee] = useState({
    name: "",
    title: "",
    parent: 0,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const id = +match.params.id;
    if (employees.length) {
      const employeeById = employees.find((employee_) => employee_.id === id);
      setEmployee({ ...employeeById });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange({ target }) {
    setEmployee({ ...employee, [target.name]: target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!isFormValid()) return;
    updateEmployee({
      ...employee,
      parent: +employee.parent,
    }).then(() => {
      toast.success("New member created ", { hideProgressBar: true });
      props.history.push("/");
    });
  }
  function isFormValid() {
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
        <h2>
          Promote <b>{employee.name}</b>
        </h2>
        <PromoteForm
          employee={employee}
          valueChange={handleChange}
          submit={handleSubmit}
          errors={errors}
        />
      </div>
    </div>
  );
}
function mapStateToProp({ employees }) {
  return { employees };
}
const mapDispatchToProps = {
  updateEmployee,
};

export default connect(mapStateToProp, mapDispatchToProps)(PromoteEmployee);
