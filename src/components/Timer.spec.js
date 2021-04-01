import { mount, unmount } from '@cypress/react'
import Timer from './Timer'

const spendSeconds = (sec) => sec * 2000

describe('<Timer />', () => {
  beforeEach(() => {
    mount(
      <Timer
        timerLabel='TEST'
        time='01:00'
        isBreak={false}
        setIsBreak={cy.stub().as('break')}
        clearAll={cy.stub().as('clear')}
      />
    )
    cy.waitForReact()
  })
  after(() => unmount())

  it('Render correctly', () => {
    cy.get('#timer-label').should('have.text', 'TEST')
    cy.get('#time-left').should('have.text', '01:00')
  })

  it('Should run and stop timer on click', () => {
    cy.clock()

    cy.get('#start_stop').click()
    cy.tick(spendSeconds(10))
    cy.get('#time-left').should('have.text', '00:50')

    cy.get('#start_stop').click()
    cy.tick(spendSeconds(30))
    cy.get('#time-left').should('have.text', '00:50')
  })

  it('When timer reaches zero should call setIsBreak()', () => {
    cy.clock()
    cy.get('#start_stop').click()
    cy.tick(spendSeconds(61))
    cy.get('@break').should('have.been.called')
  })

  it('Should reset timer on click #reset', () => {
      cy.clock()
      cy.get('#start_stop').click()
      cy.tick(spendSeconds(10))
      
      cy.get('#time-left').should('have.text', '00:50')
      cy.get('#reset').click()
      cy.get('#time-left').should('have.text', '01:00')
      cy.get('@clear').should('have.been.called')
  })
})
