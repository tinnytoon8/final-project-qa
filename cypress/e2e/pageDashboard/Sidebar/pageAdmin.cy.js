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

    // Test Case 5 : Menambahkan user yang belum jadi admin
    it("Menambahkan User Admin", () => {
        cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()

        // User Role
        cy.contains('.oxd-input-group', 'User Role')
        .find('.oxd-select-text')
        .click()

        cy.contains('.oxd-select-option', 'Admin')
        .click()

        // Status
        cy.contains('.oxd-input-group', 'Status')
        .find('.oxd-select-text')
        .click()

        cy.contains('.oxd-select-option', 'Enabled')
        .click()

        // Employee Name
        cy.contains('.oxd-input-group', 'Employee Name')
        .find('input')
        .type('Isram')

        cy.contains('.oxd-autocomplete-option', 'Isram Agung Rasal')
        .click()

        // Username
        cy.contains('.oxd-input-group', 'Username')
        .find('input')
        .type('Isramar')

        cy.contains('.oxd-input-group', 'Password')
        .find('input')
        .type('isrami123')

        cy.contains('.oxd-input-group', 'Confirm Password')
        .find('input')
        .type('isrami123')

        cy.get('button[type="submit"]').click()
    });
});