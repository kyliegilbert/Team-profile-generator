const Manager = require('../lib/Manager');

describe("Manager", ()=>{
    it("should return Manager object", ()=> {

        const manager = new Manager('Kylie', 4, 'kylie_gilbert13@yahoo.com.au', 23);
        expect(manager.OfficeNumber).toEqual(expect.any(Number));
    });
});

describe("getRole", ()=> {
    it("should return the Manager Role as Manager", () => {

        const manager = new Manager('Kylie', 4, 'kylie_gilbert13@yahoo.com.au', 23);
        expect(manager.getRole()).toEqual("Manager")
    });
    
});
