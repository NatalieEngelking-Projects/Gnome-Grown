import React from 'react';
import '../dist/main.css';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div>
        <form>
          <input className='searchInput' type='text' name='search' onChange={this.props.handleChange}/>
          <input className='searchSubmit' type='submit' value='Search' onClick={this.props.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default Search;