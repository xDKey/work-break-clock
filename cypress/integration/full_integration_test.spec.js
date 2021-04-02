describe('Integration tests: ', () => {
  before(() => cy.visit('/'))
  afterEach(() => cy.get('#reset').click())

  it('Render correctly with default values', () => {
    cy.get('#time-left').should('have.text', '25:00')
    cy.get('#session-length').should('have.text', 25)
    cy.get('#break-length').should('have.text', 5)
  })

  it('Change time on click control buttons', () => {
    cy.get('#session-decrement').click().click().click()
    cy.get('#time-left').should('have.text', '22:00')

    cy.get('#session-increment').click()
    cy.get('#time-left').should('have.text', '23:00')
  })

  it('Time should countdown on click play button and stop on click again', () => {
    cy.clock()

    cy.get('#time-left').should('have.text', '25:00')
    cy.get('#start_stop').click()

    cy.tick(20 * 1000)
    cy.get('#time-left').should('have.text', '24:50')
    cy.get('#start_stop').click()

    cy.tick(20 * 1000)
    cy.get('#time-left').should('have.text', '24:50')
  })

  it('Reset button should set default values and stop timer', () => {
    cy.get('#time-left').should('have.text', '25:00')
    cy.get('#session-length').should('have.text', 25)
    cy.get('#break-length').should('have.text', 5)

    cy.get('#session-decrement').click()
    cy.get('#break-increment').click()

    cy.get('#time-left').should('have.text', '24:00')
    cy.get('#session-length').should('have.text', 24)
    cy.get('#break-length').should('have.text', 6)

    cy.clock()
    cy.get('#start_stop').click()

    cy.tick(20 * 1000)
    cy.get('#reset').click()

    cy.tick(20 * 1000)
    cy.get('#time-left').should('have.text', '25:00')
    cy.get('#session-length').should('have.text', 25)
    cy.get('#break-length').should('have.text', 5)
  })

  it('Toogle time when timer reach 00:00', () => {
    for (let i = 0; i < 25; i++) {
      cy.get('#session-decrement').click()
    }

    cy.clock()
    cy.get('#start_stop').click()
    cy.get('#timer-label').should('have.text', 'work')
    cy.tick(121 * 1000)
    cy.get('#timer-label').should('have.text', 'break')
  })
})
