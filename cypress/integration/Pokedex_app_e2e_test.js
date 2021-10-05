/* eslint-disable no-undef */
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('loads page correctly for specific pokemon', function() {
    cy.visit('http://localhost:5000')
    cy.contains('kabuto')
    cy.get('a[href="/pokemon/kabuto"]').click()
    cy.get('.pokemon-name').contains('kabuto')
    cy.contains('swift swim')
    cy.contains('weak armor')
  })
})