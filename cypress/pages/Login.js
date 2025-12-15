class LoginPage {

    visit() {
        cy.visit("https://www.edu.goit.global/account/login");
    }

    getEmailInput() {
        return cy.get('input[name="email"]');
    }

    getPasswordInput() {
        return cy.get('input[name="password"]');
    }

    getLoginButton() {
        return cy.get('button[type="submit"]');
    }

    typeEmail(email) {
        this.getEmailInput().clear().type(email);
    }

    typePassword(password) {
        this.getPasswordInput().clear().type(password);
    }

    clickLoginButton() {
        this.getLoginButton().click();
    }

    // 🔥 Login sonrası çıkabilecek popup’ı kapatıyoruz
    closePopupIfVisible() {
        cy.get('body').then(($body) => {
            if ($body.find('button[aria-label="Close"]').length > 0) {
                cy.get('button[aria-label="Close"]').click({ force: true });
            }
        });
    }

    // POP login fonksiyonu
    login(email, password) {
        this.typeEmail(email);
        this.typePassword(password);
        this.clickLoginButton();
        this.closePopupIfVisible();
    }
}

export default new LoginPage();
