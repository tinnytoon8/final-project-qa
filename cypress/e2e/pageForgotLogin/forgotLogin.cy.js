import loginPage from '../pageObject/loginPage';
import loginData from '../../fixtures/loginData.json';

describe("Scenario Reset Password", () => {
  it("Melakukan Reset Password", () => {
    loginPage.visit()
    
    cy.contains('Forgot your password?')
      .should('be.visible')
      .click();
    
    loginPage.inputUsername(loginData.validUsername)
    
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset"
    ).as("resetPassword");
    
    cy.get('.oxd-button--secondary')
      .click();

    cy.wait("@resetPassword").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
  });
});

// catatan : bagian testing reset password selalu failed karena loadnya lama
// tapi sebenarnya berhasil kalo testing manual kalo cypress error karena terlalu lama loadnya