import {
  ContainerBottomPage,
  ContainerMiddlePage,
  ContainerUpperPage,
  Content,
  LogoButton,
  MainContainer,
  Mask,
  SubtitleContainer,
  FirstSubtitle,
  SecondSubtitle,
  VideosFilter,
} from './styles';

import Logo from '../../assets/Logo.jpg';

export function Home() {
  return (
    <MainContainer>
      <ContainerUpperPage>
        <Content>
          <LogoButton>
            <img src={Logo} alt="Logo-img" />
          </LogoButton>
          <SubtitleContainer>
            <FirstSubtitle>VFX ARTIST</FirstSubtitle>
            <SecondSubtitle>EDITOR PRODUCER</SecondSubtitle>
          </SubtitleContainer>
        </Content>
        <Mask />
      </ContainerUpperPage>
      <ContainerMiddlePage>
        <VideosFilter></VideosFilter>
      </ContainerMiddlePage>
      <ContainerBottomPage></ContainerBottomPage>
    </MainContainer>
  );
}
