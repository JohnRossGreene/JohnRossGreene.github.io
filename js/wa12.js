

//PROBLEM 1/2
let company = {
"companyName": "Tech Stars",
"website": "www.techstars.site",
"employees": [
    {
    "first_name": "Sam",
    "department": "Tech",
    "designation": "Manager",
    "salary": 40000,
    "raise_eligible": true
    },
    {
    "first_name": "Mary",
    "department": "Finance",
    "designation": "Trainee",
    "salary": 18500,
    "raise_eligible": true
    },
    {
    "first_name": "Bill",
    "department": "HR",
    "designation": "Executive",
    "salary": 21200,
    "raise_eligible": false
    }
]
};
//PROBLEM 1
function showJSONandString(company)
{
    console.log(company)
    const jsonString = JSON.stringify(company);
    console.log(jsonString);
}

//PROBLEM 3
function addEmployee(company){
    const newEmployee = {
    "first_name": "Anna",
    "department": "Tech",
    "designation": "Executive",
    "salary": 25600,
    "raise_eligible": false
    };
    company.employees.push(newEmployee);
    console.log(company.employees);
    return(company)
}
//PROBLEM 4
function countSalary(company){
    let totalSalary = 0;
    company.employees.forEach(employee => {
            totalSalary += employee.salary;
    });
    console.log(`The total salary for all employees is ${totalSalary}.`);
    return(company)
}
//PROBLEM 5
function giveRaises(company) {
    let temp = JSON.parse(JSON.stringify(company));
    company.employees.forEach(employee => {
      if (employee.raise_eligible) {
        employee.salary *= 1.1;
        employee.raise_eligible = false;
        console.log(company)
      }
    });
    return (company)
  }
//PROBLEM 6
function applyWFH(company){
  const wfh = ['Anna', 'Sam'];
  company.employees.forEach(employee => {
    employee.wfh = wfh.includes(employee.first_name);
  });
  console.log(company)
  return(company);
}
//PROBLEM 1/2
showJSONandString(company);
//PROBLEM 3
company = addEmployee(company);
//PROBLEM 4
company = countSalary(company);
//PROBLEM 5
company = giveRaises(company);
company = countSalary(company);
//PROBLEM 6
company = applyWFH(company);
// console.log(company);





