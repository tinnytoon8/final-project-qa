class loginPage {

    visit()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{ timeout: 120000 })
    }

    inputUsername(username)
    {
        cy.get('[name="username"]', { timeout: 10000 }).should('be.visible').type(username);
    }

    inputPassword(password)
    {
        cy.get('[name="password"]', { timeout: 10000 }).should('be.visible').type(password);
    }

    clickLogin()
    {
        cy.get('button[type="submit"]').click();
    }
}
export default new loginPage()