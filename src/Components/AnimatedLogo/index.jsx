import { useState } from 'react';
import { Container, LogoImg } from './styles';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

export function AnimatedLogo() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  function clickButton() {
    setIsClicked(true);
    setTimeout(() => {
      navigate('/arts');
    }, 500);
  }

  return (
    <Container>
      <LogoImg
        src={Logo}
        $isClicked={isClicked}
        onClick={() => {
          clickButton();
        }}
      />
    </Container>
  );
}
