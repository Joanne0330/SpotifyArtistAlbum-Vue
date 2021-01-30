describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
  })

describe('Search Albums Page', () => {
    it('finds on this page the Log out link' , () => {
    cy.visit('http://localhost:8080')
    cy.contains('Log out here').click()
    cy.url().should('include', 'http://localhost:8080')

  })

  it('finds on this page the header' , () => {
    cy.visit('http://localhost:8080')
    cy.contains('Welcome to Search Albums By Name of the Artist')
  })

  it('has a working input box' , () => {
    cy.visit('http://localhost:8080')
    cy.get('.input-box')
      .type('Elvis')
      .should('have.value', 'Elvis')
  })

  it('Input box is able to call for albums' , () => {
    cy.visit('http://localhost:8080')
    cy.get('.input-box')
      .type('Elvis')
      .should('have.value', 'Elvis')
    cy.get('.btn').click();
    cy.request('http://localhost:5000/auth/search/BQAd0v3I_ZvjDd7cG_EmUIG78IV0qORxWX0vPDCgIB5J33P3DIwOJAN3kHBVbu-RijgGF71QTmhtLjSF1GyQYExEBBYrD3glYFaL_xEQolsMvL0qslGnPWmMa--jRnK-s7Md76SA0OY9EW095A/Elvis');
    cy.get('.card')
      .should('have.length', 18)
  })

})