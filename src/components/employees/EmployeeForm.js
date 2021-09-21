import React from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";
import { titles } from "../../constant";
export default function EmployeeForm({
  employee,
  valueChange,
  submit,
  errors,
}) {
  return (
    <div>
      <form onSubmit={submit}>
        <TextInput
          name="name"
          label="Name"
          type="text"
          value={employee.name}
          onChange={valueChange}
          error={errors.name}
        />

        <SelectInput
          name="title"
          label="Title"
          value={employee.title}
          onChange={valueChange}
          options={titles}
          defaultOption=""
          error={errors.title}
        />

        <TextInput
          name="parent"
          type="number"
          value={employee.parent}
          onChange={valueChange}
          error={errors.parent}
          label="Parent ID"
        />
        <div className="mt-2">
          <button type="submit" className="btn btn-dark w-100">
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
