describe("Test №2 - Login and Logout", () => {
    it("Should login and logout with testowyqa@qa.team", () => {
        cy.login("testowyqa@qa.team", "QA!automation-1");
    });
});
