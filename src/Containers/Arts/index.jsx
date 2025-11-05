import { Container, Header, LogoImg } from './styles';
import Logo from '../../assets/Logo.png';
import { ListIcon } from '@phosphor-icons/react';

export function Arts() {
  return (
    <Container>
      <Header>
        <LogoImg src={Logo} />
        <button>
          <ListIcon size={'24px'} />
        </button>
      </Header>
    </Container>
  );
}
