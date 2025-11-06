import { useState, useEffect } from 'react'; // 1. Importe os hooks
import { Container, Header, LogoImg } from './styles';
import Logo from '../../assets/Logo.png';
import { ListIcon } from '@phosphor-icons/react';
import { getYoutubeVideos } from '../../Services/api';

export function Arts() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function loadVideos() {
      const videosData = await getYoutubeVideos();
      setVideos(videosData);
    }

    loadVideos();
  }, []);

  return (
    <Container>
      <Header>
        <LogoImg src={Logo} />
        <button>
          <ListIcon size={'24px'} />
        </button>
      </Header>
      <VideosContainer>
        <VideosCards></VideosCards>
      </VideosContainer>
    </Container>
  );
}
