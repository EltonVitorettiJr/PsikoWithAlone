import { AnimatedLogo } from '../../Components/AnimatedLogo';
import { ContainerUpperPage, MainContainer } from './styles';

export function Home() {
  return (
    <MainContainer>
      <ContainerUpperPage>
        <AnimatedLogo />
      </ContainerUpperPage>
    </MainContainer>
  );
}
