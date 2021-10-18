import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  row-gap: 0.75rem;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.colors.container};
  border-radius: 0.5rem;
  box-shadow: 0 12px 32px hsla(0, 0%, 20%, 0.1);

  @media screen and (min-width: 576px) {
    width: 550px;
    padding: 2.5rem;
    justify-self: center;
    border-radius: 0.75rem;
  }
`