class dashboardPage {

    visit()
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",{ timeout: 120000 })
    }
}