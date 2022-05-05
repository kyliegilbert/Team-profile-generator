const Engineer = require('../lib/Engineer');

describe("Engineer", ()=>{
    it("should return that gitHub Username is a string", ()=> {

        const engineer = new Engineer('Kylie', 4, 'kylie_gilbert13@yahoo.com.au', "kyliegilbert");
        expect(engineer.gitHubUsername).toEqual(expect.any(String));
    });
});

describe("getRole", ()=> {
    it("should return the Intern Role as Intern", () => {

        const engineer = new Engineer('Kylie', 4, 'kylie_gilbert13@yahoo.com.au', "kyliegilbert");
        expect(engineer.getRole()).toEqual("Engineer")
    });
    
});
