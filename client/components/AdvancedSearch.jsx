import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import '../dist/main.css';

class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props);
  }


  //map through each plant
  //query by id
  //if SEARCH FACTOR === DESIRED RESULT
  //dump it to a table
handleAdvanced () {
  this.props.plantData.map((eachPlant) => {
    //fetch each plants data based on id
    fetch(`http://localhost:3004/api/plants/${eachPlant.id}`)
    .then (res => res.json())
    .then ((data) => {
      this.setState({
        advancedSearchData: [...this.props.advancedSearchData, data] 
      })
    })
    .catch (err => console.log(err))
  })
}

handleAdvancedToxicity () {
  this.props.plantData.map((eachPlant) => {
    //fetch each plants data based on id
    fetch(`http://localhost:3004/api/plants/${eachPlant.id}`)
    .then (res => res.json())
    .then ((data) => {
      data.map((plantData) => {
        //if toxicity level === plantData.toxicity
      })
      this.setState({
        advancedSearchData: [...this.props.advancedSearchData, data] 
      })
    })
    .catch (err => console.log(err))
  })
}

  render () {
    if (this.props.advancedSearch === false) {
      return (
        <div>

        <DropdownButton className='dropdown' id='dropdown' title='Advanced Search'>
          <Dropdown.Item className='dropdownItem' href='#/climate' onClick={this.handleAdvanced.bind(this)}>Climate</Dropdown.Item>
          {/* <Dropdown.Item onClick={this.props.filterShadeTolerance}>Shade Tolerance </Dropdown.Item> */}
          <Dropdown.Item href='#/toxicity' onClick={this.handleAdvancedToxicity.bind(this)}>Toxicity</Dropdown.Item>
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
    } else if (this.props.advancedSearch === true) {
      <AdvancedSearchTile advancedSearchData={this.props.advancedSearchData}/>
    } else {
      return null;
    }
  }
}

export default AdvancedSearch;