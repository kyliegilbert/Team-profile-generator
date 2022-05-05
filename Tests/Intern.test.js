const Intern = require('../lib/Intern');


describe("Intern", ()=>{
    it("should return that school is a string", ()=> {

        const intern = new Intern('Kylie', 4, 'kylie_gilbert13@yahoo.com.au', "Monash Uni");
        expect(intern.school).toEqual(expect.any(String));
    });
});

describe("getRole", ()=> {
    it("should return the Intern Role as Intern", () => {

        const intern = new Intern('Kylie', 4, 'kylie_gilbert13@yahoo.com.au', "Monash Uni");
        expect(intern.getRole()).toEqual("Intern")
    });
    
});
