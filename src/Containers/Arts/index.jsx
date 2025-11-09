import { Container, Header, LogoImg, VideosContainer } from './styles';
import SimplyLogo from '../../assets/Simply-Logo.png';

import { FilterMenu } from '../../Components/FilterMenu';
import { ListIcon } from '@phosphor-icons/react';
import { FilterBar } from '../../Components/FilterBar';
import { VideosCards } from '../../Components/VideosCards';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { categories } from '../../data/portfolioVideos';
import { useWindowSize } from '../../Hooks/useWindowSize';

const TABLET_BREAKPOINT = 768;

export function Arts() {
  const [selectedCategory, setSelectedCategory] = useState('Geral');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const { width } = useWindowSize();
  const isMobile = width < TABLET_BREAKPOINT;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(false);
  };

  return (
    <Container>
      <Header>
        <LogoImg
          src={SimplyLogo}
          onClick={() => {
            navigate('/');
          }}
        />
        {isMobile && (
          <button onClick={toggleMenu}>
            <ListIcon size={'24px'} />
          </button>
        )}
      </Header>
      {!isMobile && (
        <FilterBar
          categories={categories}
          currentCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
      )}

      {isMobile && isMenuOpen && (
        <FilterMenu
          categories={categories}
          currentCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          onClose={toggleMenu}
        />
      )}

      <VideosContainer>
        <VideosCards selectedCategory={selectedCategory} />
      </VideosContainer>
    </Container>
  );
}
