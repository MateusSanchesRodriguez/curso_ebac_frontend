/// <reference types="cypress" />

describe("Inclusao de novos contatos", () => {
    it('ve se foi renderizado corretamente', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.adicionar').should('have.text', 'Adicionar')
    }),
        it('faz a insercao dos campos', () => {
            cy.visit('https://agenda-contatos-react.vercel.app/')
            cy.get('input[type="text"]').type('Mateus Sanches Rodriguez')
            cy.get('input[type="email"]').type('mateussanchesrodriguez@gmail.com')
            cy.get('input[type="tel"]').type('11 984362736')  
            cy.get('.adicionar').click()
            cy.get('h2').should('have.text', '4 contatos na agenda')
    })
})

describe("alteracao de um contatos", () => {
    it('faz a alteracao de um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="text"]').clear().type('Joao santos da espada')
        cy.get('.alterar').click()
        cy.get(':nth-child(5) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'Joao santos da espada')
        
})
})

describe("Remocao de novos contatos", () => {
        it('faz a remocao dos campos', () => {
            cy.visit('https://agenda-contatos-react.vercel.app/')
            cy.get(':nth-child(5) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('have.text', 'Joao santos da espada')
            cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })
})


