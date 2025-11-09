import {
  CloseButton,
  FilterButton,
  FilterContainer,
  FilterOverlay,
} from './styles';
import { X } from '@phosphor-icons/react';

export function FilterMenu({
  categories,
  onSelectCategory,
  currentCategory,
  onClose,
}) {
  return (
    <FilterOverlay onClick={onClose}>
      <FilterContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <X size={'28px'} />
        </CloseButton>
        <h2>Filtrar por</h2>
        {categories.map((category) => (
          <FilterButton
            key={category}
            isActive={category === currentCategory}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>
    </FilterOverlay>
  );
}
