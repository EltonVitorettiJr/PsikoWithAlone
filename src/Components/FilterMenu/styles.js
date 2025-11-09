import styled from 'styled-components';

export const FilterOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const FilterContainer = styled.div`
  background-color: white;
  padding: 40px 20px 20px 20px;
  width: 90%;
  max-width: 280px;
  position: absolute;
  text-align: center;
  top: 0;
  right: 0;
  height: 100%;

  h2 {
    color: white;
    margin-top: 0;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #000;
  cursor: pointer;
`;

export const FilterButton = styled.button`
  padding: 12px 18px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #555;
  background-color: ${(props) => (props.isActive ? '#fff' : '#333')};
  color: ${(props) => (props.isActive ? '#000' : '#fff')};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
