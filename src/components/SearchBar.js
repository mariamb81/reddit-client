import React from "react";
import styled from "styled-components";
import { BsSearch } from 'react-icons/bs'
const SearchBar = () => {
  return (
    <Wrapper> 
      <SearchInput type="text" name="query" placeholder="search"/>
      <div className="search logo">
        <SearchButton>
          <BsSearch 
          size={'1.5em'}
          color={``}
          />
        </SearchButton>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: no-wrap;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  padding: 0 10px;
  justify-content: space-between;
`;
const SearchInput = styled.input`
    border: none;
    width: 90%;
    padding-left: .5rem;
`
const SearchButton = styled.button`
    border: none;
    background-color: white;
    height: 100%;
    width: 100%;
`;
export default SearchBar;
