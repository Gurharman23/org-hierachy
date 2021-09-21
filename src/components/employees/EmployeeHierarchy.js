import React from "react";
import { getColor } from "../../utilities";
import EmployeeCard from "./EmployeeCard";

export default function EmployeeHierarchy(props) {
  const root = props.employees.length > 0 ? props.employees[0] : null;

  return root === null ? (
    <></>
  ) : (
    <div>
      <div
        key={root.id}
        className="align-items-center d-flex flex-column p-2  m-1 border"
      >
        <EmployeeCard employee={root} colorIndex={0} />
        <div className="d-flex mt-4">
          {renderChilds(
            root.id,
            props.employees,
            props.deleteEmployee,
            props.changeRoute,
            0
          )}
        </div>
      </div>
    </div>
  );
}

function renderChilds(
  parentId,
  employees,
  deleteEmployee,
  changeRoute,
  parentColorIndex
) {
  const colorIndex = getColor(parentColorIndex);
  return (
    <>
      {employees.map((employee) => {
        if (parentId === employee.parent)
          return (
            <div
              key={employee.id}
              className="align-items-center d-flex flex-column  m-1 p-2 border"
            >
              <EmployeeCard
                employee={employee}
                deleteEmployee={deleteEmployee}
                changeRoute={changeRoute}
                colorIndex={colorIndex}
              />
              <div className="d-flex mt-4">
                {renderChilds(
                  employee.id,
                  employees,
                  deleteEmployee,
                  changeRoute,
                  colorIndex
                )}
              </div>
            </div>
          );
        // eslint-disable-next-line array-callback-return
        return;
      })}
    </>
  );
}
