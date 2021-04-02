import Control from './Control'
import { mount, unmount } from '@cypress/react'

const setUpComponent = (time = 5, func = () => {}, type = 'test') => (
  <Control controlType={type} time={time} handleSetTime={func} />
)

describe('<Control />', () => {
  after(() => unmount())

  it('Render correctly', () => {
    mount(setUpComponent())
    cy.waitForReact()

    cy.react('Control').should('exist')
    cy.react('Control').get('#test-label').should('have.text', 'Work')
    cy.react('Control').get('#test-length').should('have.text', 5)
    cy.react('Control').get('button').should('have.length', 2)

    mount(setUpComponent(null, null, 'break'))
    cy.get('#break-label').should('have.text', 'Break')
  })

  it('Correctly call handleSetTime on click', () => {
    const stub = cy.stub().as('handleClick')
    mount(setUpComponent(5, stub))
    cy.waitForReact()

    cy.react('Control').get('#test-increment').click()
    cy.react('Control').get('#test-decrement').click()
    cy.get('@handleClick').should('be.calledTwice')
  })

  it('Do nothing if time < 1', () => {
    const stub = cy.stub().as('handleClick')
    mount(setUpComponent(1, stub))

    cy.get('#test-increment').click()
    cy.get('#test-decrement').click()
    cy.get('@handleClick').should('be.calledOnce')
  })

  it('Do nothing if time > 60', () => {
    const stub = cy.stub().as('handleClick')
    mount(setUpComponent(60, stub))

    cy.get('#test-increment').click()
    cy.get('#test-decrement').click()
    cy.get('@handleClick').should('be.calledOnce')
  })
})
