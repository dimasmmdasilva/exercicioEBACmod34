/// <reference types="cypress" />

describe('Testes para a página agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it ('Inclusão de um contato', () => {
        cy.get('input[type="text"]').type('Dimas Marcondes')
        cy.get('input[type="email"]').type('dimasmarcondes88@gmail.com')
        cy.get('input[type="tel"]').type('+5519992926886')
        cy.get('button[type="submit"]').click()
    })

    it ('Alteração de um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('Teste de alteração')
        cy.get('input[type="email"]').clear().type('alterandoemail@gmail.com')
        cy.get('input[type="tel"]').clear().type('+551998765432')
        cy.get('.alterar').click()
    })

    it ('Remoção de um contato', () => {
        cy.get('.delete').first().click()
    })
})