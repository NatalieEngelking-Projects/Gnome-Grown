import React from 'react';
import '../dist/main.css';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form className='searchForm'>
          <input type='text' name='search'/>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}

export default Search;