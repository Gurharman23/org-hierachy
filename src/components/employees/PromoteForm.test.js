import React from "react";
import { render } from "@testing-library/react";
import PromoteForm from "./PromoteForm";

function renderPromoteForm() {
  const employee = { name: "", title: "", parent: 0 };
  const valueChange = () => {};
  const submit = () => {};
  const errors = {};
  return render(
    <PromoteForm
      employee={employee}
      valueChange={valueChange}
      submit={submit}
      errors={errors}
    />
  );
}

it("Should render the promote button", () => {
  const { getByText } = renderPromoteForm();
  getByText("Promote");
});
