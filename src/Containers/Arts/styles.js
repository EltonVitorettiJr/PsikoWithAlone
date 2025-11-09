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
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
  border-bottom: 2px solid #c6c6c6ff;

  button {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 20px;
    top: 32px;
  }
`;

export const LogoImg = styled.img`
  width: 120px;
  margin: 0 auto 10px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 170px;
  }
`;
