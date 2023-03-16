
import {employees} from "./employees.js";
import {totalSalary} from "./methods.js";
console.log(totalSalary(employees));



import { departmentQuantity } from "./methods.js";
console.log(departmentQuantity(employees));


import * as employeesMethods from "./methods.js";
console.log(employeesMethods.departmentSalary(employees));