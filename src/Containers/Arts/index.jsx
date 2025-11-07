import { Container, Header, LogoImg, VideosContainer } from './styles';
import Logo from '../../assets/Logo.png';
import { ListIcon } from '@phosphor-icons/react';
import { VideosCards } from '../../Components/videosCards';
import { useNavigate } from 'react-router-dom';

export function Arts() {
  const intagramVideo1 = ``;

  const navigate = useNavigate();
  return (
    <Container>
      <Header>
        <LogoImg
          src={Logo}
          onClick={() => {
            navigate('/');
          }}
        />
        <button>
          <ListIcon size={'24px'} />
        </button>
      </Header>
      <VideosContainer>
        <div
          style={{ margin: '20px auto', maxWidth: '320px' }}
          dangerouslySetInnerHTML={{ __html: intagramVideo1 }}
        />
        <VideosCards />
      </VideosContainer>
    </Container>
  );
}
