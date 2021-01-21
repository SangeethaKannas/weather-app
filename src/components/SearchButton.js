import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = ({handleSearch}) => {
  return(<section className="d-grid gap-2 col-6 mx-auto">
      <button onClick={handleSearch} className="btn btn-primary" type="button">
        Search
      </button>
  </section>);
}

export default SearchButton;

SearchButton.propTypes = {
  handleSearch: PropTypes.func
}