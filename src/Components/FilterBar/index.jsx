import { FilterButton, FilterContainer } from './styles';

export function FilterBar({ categories, onSelectCategory, currentCategory }) {
  return (
    <FilterContainer>
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
  );
}
