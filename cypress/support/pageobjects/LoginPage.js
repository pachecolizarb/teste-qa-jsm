
/// <reference types="Cypress" />

import LoginElements from '../../support/elements/LoginElements'
const loginElements = new LoginElements
const faker = require('faker-br');
const url = Cypress.config('baseUrl')

//gerar CPF fake
let meuCpf = faker.br.cpf();


class LoginPage {
 
 
      
    go() {
        cy.visit(url) 
    }
    
    logo() {

       cy.url().should('be.equal','https://www.juntossomosmais.com.br/')

    }

    visualizarPaginaInicial() {
        cy.get(loginElements.primeiroCard()).should('be.visible')
        cy.get(loginElements.segundoCard()).should('be.visible')
        cy.get(loginElements.terceiroCard()).should('be.visible')

    }

    entrar() {
        cy.get(loginElements.entrarLoja()).click({force:true})
    }

    cadastro() {
        cy.get(loginElements.cadastro()).click({force:true})
    }

    pgCadastro() {
        cy.get(loginElements.mensagemCPF()).should('be.visible')
    }

    inserirCPF() {
        cy.get(loginElements.inserirCPF()).click().type(meuCpf)
    }
    continuar() {
        cy.get(loginElements.continue()).click({force:true})
    }

    obras() {
        cy.get(loginElements.profObras()).click({force:true})
    }

    result() {
        cy.get('select').select('Pedreiro')      
    }

    varejo() {
        cy.get(loginElements.online()).click({force:true})

    }

    varejoPagina() {
        cy.url().should('be.equal','https://www.juntossomosmais.com.br/home/varejo')
    }

    profissionalObra() {
        cy.get(loginElements.paginaObras()).click({force:true})
    }

    paginaObras() {

        cy.url().should('be.equal','https://www.juntossomosmais.com.br/home/profissional-de-obra')
    }

    profissionalindustria() {
        cy.get(loginElements.paginaIndustria()).click({force:true})
    }

    paginaIndustria() {
        cy.url().should('be.equal','https://www.juntossomosmais.com.br/home/industria')
    }
}

export default LoginPage;
