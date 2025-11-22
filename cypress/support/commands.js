Cypress.Commands.add("login", (email, password) => {
    cy.viewport(1280, 720);
    cy.visit("https://www.edu.goit.global/account/login");

    // Login
    cy.get('input[name="email"]').clear().type(email);
    cy.get('input[name="password"]').clear().type(password);
    cy.get('button[type="submit"]').click();

    // 🔥 POPUP VARSA KAPAT - GARANTİ ÇALIŞAN SÜRÜM
    cy.get('body').then(($body) => {
        if ($body.find('button[aria-label="Close"]').length > 0) {
            cy.get('button[aria-label="Close"]').click({ force: true });
        }
    });

    // 🔥 Avatar butonunu RESİMDEN seç (en doğru yöntem)
    cy.get('img[src="/images/user-avatar.svg"]', { timeout: 15000 })
      .should("be.visible")
      .parents("button")
      .click({ force: true });

    // 🔥 Logout butonu
    cy.contains('[role="menuitem"]', "Log out", { timeout: 15000 })
      .should("be.visible")
      .click({ force: true });

    // 🔥 Logout doğrulama
    cy.url({ timeout: 10000 }).should("include", "/account/login");
});
