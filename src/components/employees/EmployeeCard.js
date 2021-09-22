import React from "react";
import { colors } from "../../utilities";

export default function EmployeeCard({
  employee,
  changeRoute,
  deleteEmployee,
  colorIndex,
}) {
  return (
    <div
      className="card card-dimensions position-relative"
      style={{
        borderColor: colors[colorIndex],
        borderWidth: "0.125rem",
      }}
    >
      <div
        className="card-body"
        style={{ cursor: "pointer" }}
        onClick={() => changeRoute(employee.id)}
      >
        <h5 className="card-title text-truncate">{employee.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted text-truncate">
          Title: {employee.title}
        </h6>
        <p className="m-0"> ID: {employee.id} </p>
        <div
          className="position-absolute top-0 btn m-0 p-0"
          style={{
            right: "0px",
          }}
          onClick={(event) => {
            event.stopPropagation();
            deleteEmployee(employee);
          }}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
