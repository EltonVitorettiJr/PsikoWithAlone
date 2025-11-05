import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  background-color: transparent;
`;

export const LogoImg = styled.img`
  width: 250px;
  transition:
    transform 5s ease-out,
    opacity 0.2s ease-out;

  transform: ${(props) => (props.$isClicked ? 'scale(4)' : 'scale(1)')};
  opacity: ${(props) => (props.$isClicked ? 1 : 1)};
`;

export const SubtitleContainer = styled.div`
  display: flex;
  justify-content: end;
`;
