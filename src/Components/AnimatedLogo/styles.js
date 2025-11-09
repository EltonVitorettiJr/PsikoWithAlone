import styled from 'styled-components';
import LogoG from '../../assets/Logo-G.png';
import LogoM from '../../assets/Logo-M.png';

export const Container = styled.button`
  border: none;
  background-color: transparent;
`;

export const LogoImg = styled.div`
  background-image: url('${LogoM}');
  width: 250px;
  height: 224px;

  transition:
    transform 0.5s ease-out,
    opacity 0.2s ease-out;

  transform: ${(props) => (props.$isClicked ? 'scale(4)' : 'scale(1)')};
  opacity: ${(props) => (props.$isClicked ? 0 : 1)};

  @media screen and (min-width: 768px) {
    background-image: url('${LogoG}');
    width: 351px;
    height: 315px;
  }
`;
