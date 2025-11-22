describe("Test №1 - Login and Logout", () => {
    it("Should login and logout with user888@gmail.com", () => {
        cy.login("user888@gmail.com", "1234567890");
    });
});
