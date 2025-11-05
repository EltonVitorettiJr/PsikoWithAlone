import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { Container, LogoImg } from './styles';
import { useNavigate } from 'react-router-dom';

export function AnimatedLogo() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  function clickButton() {
    setIsClicked(true);
    setTimeout(() => {
      navigate('/arts');
    }, 5000);
  }

  return (
    <Container>
      <LogoImg
        src={Logo}
        alt="Logo-img"
        $isClicked={isClicked}
        onClick={() => {
          clickButton();
        }}
      />
    </Container>
  );
}
