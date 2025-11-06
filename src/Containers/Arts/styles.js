import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const VideosContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 0;

  button {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 22px;
  }
`;

export const LogoImg = styled.img`
  width: 70px;
  margin: 0 auto;
`;
