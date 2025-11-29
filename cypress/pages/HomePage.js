class HomePage {

    // Avatar / Menü açma butonu
    getAvatarButton() {
        return cy.get('#open-navigation-menu-mobile', { timeout: 15000 });
    }

    openUserMenu() {
        this.getAvatarButton()
            .should("be.visible")
            .click({ force: true });
    }

    clickLogout() {
        cy.contains("button", "Log out", { timeout: 15000 })
            .should("be.visible")
            .click({ force: true });
    }

    checkRedirectToLogin() {
        cy.url({ timeout: 10000 }).should("include", "/account/login");
    }
}

export default new HomePage();
