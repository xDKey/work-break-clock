import { mount, unmount } from '@cypress/react'
import App from './App'

const spendSeconds = (sec) => sec * 2000

describe('<App />', () => {
  before(() => {
    mount(<App />)
    cy.waitForReact()
  })
  after(() => unmount())

  it('Render correctly', () => {
    cy.react('App').contains('Work + break Clock')
    cy.get('#time-left').should('have.text', '25:00')
  })

  it('Change time on click control buttons', () => {
    cy.get('#session-decrement').click()
    cy.get('#time-left').should('have.text', '24:00')
  })

  it('Reset button should set default values and stop timer', () => {
    cy.clock()
    cy.get('#session-decrement').click()
    cy.get('#start_stop').click()

    cy.tick(spendSeconds(20))
    cy.get('#reset').click()

    cy.tick(spendSeconds(20))
    cy.get('#time-left').should('have.text', '25:00')
  })

  it('Change timer when timer reach 00:00', () => {
    cy.get('#session-decrement').then((elem) => {
      for (let i = 0; i < 25; i++) {
        cy.wrap(elem).click()
      }
    })

    cy.clock()
    cy.get('#start_stop').click()
    cy.get('#timer-label').should('have.text', 'work')
    cy.tick(spendSeconds(61))
    cy.get('#timer-label').should('have.text', 'break')
  })
})