import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #fff;
  background-color: ${(props) => (props.isActive ? '#fff' : 'transparent')};
  color: ${(props) => (props.isActive ? '#000' : '#bbb')};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;
