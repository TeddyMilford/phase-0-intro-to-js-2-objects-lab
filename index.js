// Write your solution in this file!

const employee = {
  name: "Teddy",
  streetAddress: "123 Apple street",
};

const updateEmployeeWithKeyAndValue = function (employee, key, value) {
  const newEmployee = { ...employee };
  newEmployee[key] = value;

  return newEmployee;
};

const destructivelyUpdateEmployeeWithKeyAndValue = function (
  employee,
  key,
  value
) {
  employee[key] = value;
  return employee;
};

const deleteFromEmployeeByKey = function (employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
};

const destructivelyDeleteFromEmployeeByKey = function (employee, key) {
  delete employee[key];
  return employee;
};
