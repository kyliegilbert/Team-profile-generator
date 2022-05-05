
const Employee = require('../lib/Employee');

describe("Employee", ()=>{
    it("should return that employee name is a string", ()=> {

        const employee = new Employee('Kylie', 4, 'kylie_gilbert13@yahoo.com.au');
        expect(employee.name).toEqual(expect.any(String));
    });
});

describe("id", ()=> {
    it("should return that the id is a number", () => {

        const employee = new Employee('Kylie', 4, 'kylie_gilbert13@yahoo.com.au');
        expect(employee.id()).toEqual(Number)
    });
    
});

describe("email", ()=> {
    it("should return that the email is a string", () => {

        const employee = new Employee('Kylie', 4, 'kylie_gilbert13@yahoo.com.au');
        expect(employee.email()).toEqual(String)
    });
    
});
describe("getRole", ()=> {
    it("should return the Employee Role as Employee", () => {

        const employee = new Employee('Kylie', 4, 'kylie_gilbert13@yahoo.com.au');
        expect(employee.getRole()).toEqual("Employee")
    });
    
});

