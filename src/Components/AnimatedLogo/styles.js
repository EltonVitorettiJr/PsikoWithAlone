import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  outline: none;
`;

export const LogoImg = styled.img`
  width: 200px;

  -webkit-tap-highlight-color: transparent;
  outline: none;

  transition:
    transform 0.5s ease-out,
    opacity 0.2s ease-out;

  transform: ${(props) => (props.$isClicked ? 'scale(4)' : 'scale(1)')};
  opacity: ${(props) => (props.$isClicked ? 0 : 1)};

  @media screen and (min-width: 768px) {
    width: 350px;
  }
`;
