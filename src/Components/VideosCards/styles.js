import styled from 'styled-components';

export const ContentCard = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const VideoTitle = styled.h2`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: hidden;
  text-align: center;
  width: 90%;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  margin: 0;
  z-index: 2;
`;

export const VideoCard = styled.a`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  width: 90%;

  img {
    display: block;
    filter: brightness(100%);
    transition: filter 0.3s ease-in-out;
  }

  &:hover {
    img {
      filter: brightness(30%);
    }

    ${VideoTitle} {
      opacity: 1;
      visibility: visible;
    }
  }
`;
