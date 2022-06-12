import styledComponents from 'styled-components';
import SearchBar from '../SearchBar';

const SearchWrapper = styledComponents.section`
  padding:20px 5% 0;
`;

const SearchInner = styledComponents.div`
  position:relative;
  top:-75px;
  padding: 50px 100px;
  box-shadow: 0px 0px 40px rgba(0, 0, 102, 0.2);
  background-color: #fff;
  border-radius: 24px;
`;

const SearchArea = () => {
  return (
    <SearchWrapper>
      <SearchInner>
        <SearchBar borderColor={'rgba(0, 0, 102, 0.2)'} />
      </SearchInner>
    </SearchWrapper>
  );
};

export default SearchArea;
