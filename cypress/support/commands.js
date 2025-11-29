Cypress.Commands.add("login", (email, password) => {
    cy.viewport(1280, 720);
    cy.visit("https://www.edu.goit.global/account/login");

    cy.get('input[name="email"]').clear().type(email);
    cy.get('input[name="password"]').clear().type(password);
    cy.get('button[type="submit"]').click();

    // Popup varsa kapat
    cy.get("body").then(($body) => {
        if ($body.find('button[aria-label="Close"]').length > 0) {
            cy.get('button[aria-label="Close"]').click({ force: true });
        }
    });

    // 🔥 Hem avatar hem mobile-menu için dinamik çözüm
    cy.get("body").then(($body) => {
        if ($body.find('img[src="/images/user-avatar.svg"]').length > 0) {
            // Avatar varsa
            cy.get('img[src="/images/user-avatar.svg"]')
                .parents("button")
                .click({ force: true });
        } else if ($body.find('#open-navigation-menu-mobile').length > 0) {
            // Avatar yoksa tüm hesaplarda görünen mobile menu button
            cy.get('#open-navigation-menu-mobile')
                .click({ force: true });
        } else {
            throw new Error("Ne avatar ne mobile menu bulundu!");
        }
    });

    // Logout
    cy.contains("button", "Log out", { timeout: 15000 })
        .should("be.visible")
        .click({ force: true });

    cy.url({ timeout: 10000 }).should("include", "/account/login");
});
