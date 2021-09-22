import React from "react";
import renderer from "react-test-renderer";
import { employees } from "../../mockData.js";
import EmployeeHierarchy from "./EmployeeHierarchy.js";
it("To check the rendered tree Hierarchy", () => {
  const tree = renderer.create(
    <EmployeeHierarchy
      employees={employees}
      deleteEmployee={jest.fn()}
      changeRoute={jest.fn()}
    />
  );

  expect(tree).toMatchSnapshot();
});
