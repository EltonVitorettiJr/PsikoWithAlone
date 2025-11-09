import { AnimatedLogo } from '../../Components/AnimatedLogo';
import { ContainerPage, MainContainer } from './styles';

export function Home() {
  return (
    <MainContainer>
      <ContainerPage>
        <AnimatedLogo />
      </ContainerPage>
    </MainContainer>
  );
}
