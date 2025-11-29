import LoginPage from "../pages/Login";
import HomePage from "../pages/HomePage";

describe("GoIT Login Tests - POP", () => {

    it("Test #1: user888 login & logout", () => {
        LoginPage.visit();
        LoginPage.login("user888@gmail.com", "1234567890");

        HomePage.openUserMenu();
        HomePage.clickLogout();
        HomePage.checkRedirectToLogin();
    });

    it("Test #2: testowyqa login & logout (POP + custom command)", () => {
        LoginPage.visit();                                // a. Login sayfasını aç
        LoginPage.login("testowyqa@qa.team", "QA!automation-1");  

        HomePage.openUserMenu();                          // Menü butonunu aç
        HomePage.clickLogout();                           // Logout
        HomePage.checkRedirectToLogin();                  // Login sayfasına döndüğünü kontrol et
    });

});
