import React from 'react';
import '../dist/main.css';

class Search extends React.Component {
  constructor(props) {
    super(props)
  }


//drop down
//search for: 
//plants based on climate, plants based on shade, plants based on sun, plants based on toxicity, plants based on lifespan, plants based on products, plants based on seed/fruit
//plants based on duration (perennial/etc), plants based on foliage(&&/||) color, plants based on drought tolerance (need lots of watering)


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