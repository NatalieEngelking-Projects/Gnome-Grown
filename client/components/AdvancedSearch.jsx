import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import AdvancedSearchTable from './AdvancedSearchTable.jsx'
import '../dist/main.css';

class AdvancedSearch extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      lightData: [],
    }
    this.handleAdvancedLight = this.handleAdvancedLight.bind(this);
  }

handleAdvancedLight (light) {
    fetch(`http://localhost:3004/api/v1/plants/search_light/${light}`)
    .then (res => res.json())
    .then((plants) => {
//// THE ID SEARCH
      plants.data.map((each) => {
        fetch(`http://localhost:3004/api/plants/${each.id}`)
          .then (res => res.json())
          .then((plantsData) => {
            console.log(plantsData)
              this.setState({ lightData: [...this.state.lightData, plantsData.data] }) 
          })
      })
    })
  .catch (err => console.log(err))
}

  render () { 
    // console.log(this.state.lightData)
    if (this.props.advancedClicked === true) {
      return(
        <div>
          <AdvancedSearchTable advancedClicked={this.props.advancedClicked} lightData={this.state.lightData}/>
        </div>
      )
    } else {
      return (
        <div>
          <DropdownButton className='dropdown' id='dropdown' title='Advanced Search'>
            <Dropdown.Item className='dropdownItem' href='#/climate' >Climate</Dropdown.Item>
              {/* <Dropdown.Item onClick={this.props.filterShadeTolerance}>Shade Tolerance </Dropdown.Item> */}
            <Dropdown.Item href=''>Toxicity</Dropdown.Item>
            <Dropdown.Item href='#/lightTolerance' onClick={(e) => {e.preventDefault(); this.handleAdvancedLight(1); this.props.handleAdvancedClicked();}} >Light Tolerance </Dropdown.Item>
            <Dropdown.Item href='#/lifespan'>Lifespan</Dropdown.Item>
            <Dropdown.Item href='#/duration'>Duration</Dropdown.Item>
                {/* gonna need a sub filter for product type */}
            <Dropdown.Item href='#/product_type'>Product Type</Dropdown.Item> 
            <Dropdown.Item href='#/seed_fruit'>Seed/Fruit</Dropdown.Item>
            <Dropdown.Item href='#/foliage_flowerColor'>Foliage/Flower Color</Dropdown.Item>
            <Dropdown.Item href='#/droughtTolerance'>Drought Tolerance</Dropdown.Item>
          </DropdownButton>
        </div>
      )
    }
  }
}


export default AdvancedSearch;