import {ButtonGroup, Button} from 'react-bootstrap';
import RemoveIcon from './RemoveIcon';
import styled from 'styled-components';

function Filter({filters, clearFilter, removeFilter}) {
  return (
    <FilterGroup className="card filter" filterActive={!!filters.length}>
      <div className="d-flex flex-wrap gap-2 align-items-center">
        {filters.map((filter, index) => (
          <ButtonGroup key={filter + index}>
            <Button>{filter}</Button>
            <Button variant="secondary" onClick={() => removeFilter(filter)}>
              <RemoveIcon />
            </Button>
          </ButtonGroup>
        ))}
        {/* eslint-disable-next-line */}
        <a href="#" className="ms-auto" onClick={() => clearFilter()}>
          Clear
        </a>
      </div>
    </FilterGroup>
  );
}

const FilterGroup = styled.div`
  visibility: ${({filterActive}) => (filterActive ? 'visible' : 'hidden')};
`;
export default Filter;
