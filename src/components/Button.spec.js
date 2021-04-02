import Button from './Button'
import { mount, unmount } from '@cypress/react'

describe('<Button />', () => {
  beforeEach(() => {
    const onClick = cy.stub().as('onClick')
    mount(
      <Button id='test' onClick={onClick}>
        Test inner text
      </Button>
    )
    cy.waitForReact()
  })

  after(() => unmount())

  it('Render correctly', () => {
    cy.react('Button')
      .should('have.text', 'Test inner text')
      .and('have.id', 'test')
  })

  it('Correctly call on click', () => {
    cy.react('Button').click()
    cy.get('@onClick').should('be.called')
  })
})
