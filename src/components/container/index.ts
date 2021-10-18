import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  align-content: center;
  height: 100vh;

  max-width: 968px;
  margin-left: 1rem;
  margin-right: 1rem;

  @media screen and (min-width: 968px) {
    margin-left: auto;
    margin-right: auto;
  }
`
