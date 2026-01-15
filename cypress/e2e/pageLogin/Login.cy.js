import loginPage from '../pageObject/loginPage';
import loginData from '../../fixtures/loginData.json';

describe("Scenario Halaman Login", () => {
  // Test Case 1
  it("Verifikasi Login Menggunakan Akun Valid", () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.validUsername)
    loginPage.inputPassword(loginData.validPassword)

    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary"
    ).as("actionSummary");

    loginPage.clickLogin()

    cy.wait("@actionSummary").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });

    cy.url().should('include', '/dashboard')
  });

  // Test Case 2
  it("Verifikasi Login dengan Tidak Mengisi Username dan Password", () => {
    loginPage.visit()
    loginPage.clickLogin()
  });

  // Test Case 3
  it("Verifikasi Login Menggunakan Username Invalid", () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.invalidUsername)
    loginPage.inputPassword(loginData.validPassword)
    loginPage.clickLogin()
  });

  // Test Case 4
  it("Verifikasi Login Menggunakan Password Invalid", () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.validUsername)
    loginPage.inputPassword(loginData.invalidPassword)
    loginPage.clickLogin()
  });

  // Test Case 5
  it("Verifikasi Login Menggunakan Username dan Password Invalid", () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.invalidUsername)
    loginPage.inputPassword(loginData.invalidPassword)
    loginPage.clickLogin()
  });
});
