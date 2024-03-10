import React from "react";
import { render } from "@testing-library/react";
import EmployeeForm from "./EmployeeForm";

function renderCourseForm() {
  const employee = { name: "", title: "", parent: 0 };
  const valueChange = () => {};
  const submit = () => {};
  const errors = {};
  return render(
    <EmployeeForm
      employee={employee}
      valueChange={valueChange}
      submit={submit}
      errors={errors}
    />
  );
}

it("Should render the submit button", () => {
  const { getByText } = renderCourseForm();
  getByText("Submit");
});
