import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 10px;
  background: grey;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 100%;
  box-shadow: 1px 1px 2px black;
`

const Button = ({ id, children, onClick }) => {
  return (
    <StyledButton id={id} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
