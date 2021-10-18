import styled, { css } from 'styled-components'

type ContainerProps = {
  isOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  box-shadow: 0 2px 6px hsla(0, 0%, 15%, 0.1);
  background-color: var(--container-color);
  border-radius: 0.25rem;
  position: relative;
  transition: all 0.25s ease;

  &::after {
    content: '';
    background-color: var(--first-color);
    width: 5px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0.25rem 0 0 0.25rem;
  }

  & > header {
    display: flex;
    column-gap: 0.5rem;
    padding: 1.25rem 1.25rem 1.25rem 1rem;
    cursor: pointer;

    & > h3 {
      font-size: ${(props) => props.theme.fontsSize.small};
      color: ${(props) => props.theme.colors.title};
      font-weight: ${(props) => (props.isOpen ? 600 : 400)};
      margin-top: 0.15rem;
      transition: 0.2s;
    }

    & > i {
      font-size: 1.5rem;
      height: max-content;
      color: ${(props) => props.theme.colors.title};

      transition: 0.3s;

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
    height: 0;
    transition: all 0.25s ease;

    & > p {
      padding: 0 1.25rem 1.25rem 3rem;
      font-size: ${(props) => props.theme.fontsSize.smaller};
    }
  }

  @media screen and (min-width: 576px) {
    header {
      padding: 1.5rem;

      h3 {
        padding-right: 3.5rem;
      }
    }

    p {
      padding: 0 4rem 1.25rem 3.5rem;
    }
  }
`
