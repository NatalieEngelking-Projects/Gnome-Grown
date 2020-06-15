import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import '../dist/main.css';

class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.advancedSearch)
  }

  render() {
    if (this.props.advancedSearch === true) {
      return (
        <div>

        <DropdownButton className='dropdown' id='dropdown' title='Advanced Search'>
          <Dropdown.Item>Climate</Dropdown.Item>
          {/* <Dropdown.Item onClick={this.props.filterShadeTolerance}>Shade Tolerance </Dropdown.Item> */}
          <Dropdown.Item>Toxicity</Dropdown.Item>
          <Dropdown.Item>Lifespan</Dropdown.Item>
          <Dropdown.Item>Duration</Dropdown.Item>
          {/* gonna need a sub filter for product type */}
          <Dropdown.Item>Product Type</Dropdown.Item> 
          <Dropdown.Item>Seed/Fruit</Dropdown.Item>
          <Dropdown.Item>Foliage/Flower Color</Dropdown.Item>
          <Dropdown.Item>Drought Tolerance</Dropdown.Item>
        </DropdownButton>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default AdvancedSearch;