import loginPage from '../pageObject/loginPage';
import loginData from '../../fixtures/loginData.json';

describe("Scenario Halaman Dashboard", () => {
    beforeEach(() => {
    // precondition: user sudah login
    loginPage.visit()
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    // pastikan sudah masuk dashboard
    cy.url().should('include', '/dashboard')
  })

  // Test Case 1 : Menampilkan halaman dashboard
  // it('Menampilkan halaman dashboard', () => {
  //   cy.get('.oxd-topbar-header-title')
  //     .should('be.visible')
  //     .and('contain', 'Dashboard')
  // })

  // Test Case 2 : bukan dan tutup Sidebar
  // it('Sidebar', () => {
  //  cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
  // })

  // Test Case 3 : Mengubah kata sandi Admin
  // it('Mengubah Kata Sandi akun Admin', () => {
  //   cy.get('.oxd-userdropdown-tab')
  //     .should('be.visible')
  //     .click();
    
  //   cy.contains('Change Password')
  //     .should('be.visible')
  //     .click();

  //   cy.get('input[type="password"]').eq(0).type(loginData.validPassword)
  //   cy.get('input[type="password"]').eq(1).type('admin12345')
  //   cy.get('input[type="password"]').eq(2).type('admin12345')

  //   cy.get('button[type="submit"]').click()
  // })

  // Test Case 4 : Logout 
  // it('Keluar dari Website', () => {
  //   cy.get('.oxd-userdropdown-tab')
  //     .should('be.visible')
  //     .click();

  //   cy.contains('Logout')
  //     .should('be.visible')
  //     .click();
    
  //   cy.url().should('include', '/auth/login')
  // })
});