import styled, { css } from 'styled-components'

type ContainerProps = {
  isOpen: boolean
  normalElementHeight: number | undefined
}

export const Container = styled.div<ContainerProps>`
  box-shadow: 0 2px 6px hsla(0, 0%, 15%, 0.1);
  background-color: ${(props) => props.theme.colors.container};
  border-radius: 0.25rem;
  position: relative;

  &::after {
    content: '';
    background-color: ${(props) => props.theme.colors.primary};
    width: 5px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.25rem 0 0 0.25rem;
  }

  & > button {
    display: flex;
    align-items: center;
    width: 100%;
    appearance: none;
    background-color: transparent;
    border: 0;
    font-family: inherit;
    column-gap: 0.5rem;
    padding: 1.25rem 1.25rem 1.25rem 1rem;
    cursor: pointer;

    & > h3 {
      font-size: ${(props) => props.theme.fontsSize.small};
      text-align: left;
      color: ${(props) => props.theme.colors.title};
      font-weight: ${(props) => (props.isOpen ? 600 : 400)};
      margin-top: 0.15rem;
      transition: 0.2s;
      transition: all 0.3s;
    }

    & > svg {
      font-size: 1.2rem;
      height: max-content;
      color: ${(props) => props.theme.colors.title};
      flex-shrink: 0;

      transform: rotate(0);

      transition: all 0.3s;

      ${(props) =>
        props.isOpen
          ? css`
              transform: rotate(45deg);
            `
          : ''}
    }
  }

  & > div {
    overflow: hidden;
    max-height: ${(props) =>
      props.isOpen ? `${props.normalElementHeight}px` : 0};

    transition: all ease 0.35s;

    & > p {
      padding: 0 1.25rem 1.25rem 3rem;
      text-align: justify;
      font-size: ${(props) => props.theme.fontsSize.smaller};
    }
  }

  @media screen and (min-width: 576px) {
    button {
      padding: 1.5rem;

      h3 {
        padding-right: 3.5rem;
      }
    }

    p {
      padding: 0 4rem 1.25rem 3.5rem !important;
    }
  }
`
