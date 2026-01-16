import loginPage from "../../pageObject/loginPage";

describe("Scenario Reset Password", () => {
    beforeEach(() => {
        // precondition: user sudah login
        loginPage.visit()
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
    
        // pastikan sudah masuk dashboard
        cy.url().should('include', '/dashboard')
    })

    // Test Case 5 : Menambahkan user (bukan admin)
    it("Menambahkan User Bukan Admin", () => {
        cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()

        cy.get('input[name="firstName"]').type('Isram')
        cy.get('input[name="middleName"]').type('Agung')
        cy.get('input[name="lastName"]').type('Rasal')

        cy.get('button[type="submit"]').click()
    });

    // Test Case 6 : Menambahkan user admin
    it("Menambahkan User Admin", () => {
        cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
        cy.get(':nth-child(2) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        
        cy.get('input[name="firstName"]').type('Satu')
        // uncoment jika ingin menggunakan nama tengah
        cy.get('input[name="middleName"]').type('Dua') 
        cy.get('input[name="lastName"]').type('Tiga')

        cy.get('.oxd-switch-input').click()

        cy.contains('.oxd-radio-wrapper', 'Enabled').click()

        cy.contains('.oxd-input-group', 'Username')
        .find('input')
        .type('saduti')

        cy.contains('.oxd-input-group', 'Password')
        .find('input')
        .type('saduti123')

        cy.contains('.oxd-input-group', 'Confirm Password')
        .find('input')
        .type('saduti123')

        cy.get('button[type="submit"]').click()
    });
});