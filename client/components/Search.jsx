import React from 'react';
import '../dist/main.css';
import { DropdownButton, Dropdown } from 'react-bootstrap'

class Search extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div>
        {/* <DropdownButton className='dropdown' id='dropdown' title='Dropdown'>
          <Dropdown.Item>Climate</Dropdown.Item>
          <Dropdown.Item>Shade Tolerance</Dropdown.Item>
          <Dropdown.Item>Toxicity</Dropdown.Item>
          <Dropdown.Item>Lifespan</Dropdown.Item>
          <Dropdown.Item>Duration</Dropdown.Item>
          {/* gonna need a sub filter for product type */}
          {/* <Dropdown.Item>Product Type</Dropdown.Item> 
          <Dropdown.Item>Seed/Fruit</Dropdown.Item>
          <Dropdown.Item>Foliage/Flower Color</Dropdown.Item>
          <Dropdown.Item>Drought Tolerance</Dropdown.Item>
        </DropdownButton> */}
        <form>
          <input className='searchInput' type='text' name='search' onChange={this.props.handleChange}/>
          <input className='searchSubmit' type='submit' value='Search' onClick={this.props.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default Search;