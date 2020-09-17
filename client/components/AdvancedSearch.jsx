import React from 'react';
import AdvancedSearchTile from './AdvancedSearchTile.jsx'
import { DropdownButton, Dropdown } from 'react-bootstrap';
import '../dist/main.css';

class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightData: [],
    }
    console.log(props)
    this.handleAdvancedLight = this.handleAdvancedLight.bind(this);
  }

handleAdvancedLight (light) {
  console.log('here')
  this.state.advancedClicked = true;
    fetch(`http://localhost:3004/api/v1/plants/search_light/${light}`)
    .then (res => res.json())
    .then((plantData) => {

      console.log(plantData)

      this.setState({  
        lightData: {
          id: plantData.data.id, 
          common_name: plantData.data.common_name, 
          family_common_name: plantData.data.family_common_name,
          scientific_name: plantData.data.scientific_name,
          duration: plantData.data.main_species.specifications.duration,
          shape_and_orientation: plantData.data.main_species.specifications.shape_and_orientation,
          toxicity: plantData.data.main_species.specifications.toxicity,
          specifications: plantData.data.main_species.specifications,
          growth: plantData.data.main_species.growth,
          fruit_or_seed: plantData.data.main_species.fruit_or_seed,
          foliage: plantData.data.main_species.foliage,
          flower: plantData.data.main_species.flower,
          image: plantData.data.image_url,
        }
      })
    .catch (err => console.log(err))
  })
}

  render () { 
    if (this.props.advancedClicked === false) {
      return(
        <div>
          <DropdownButton className='dropdown' id='dropdown' title='Advanced Search'>
            <Dropdown.Item className='dropdownItem' href='#/climate' >Climate</Dropdown.Item>
              {/* <Dropdown.Item onClick={this.props.filterShadeTolerance}>Shade Tolerance </Dropdown.Item> */}
            <Dropdown.Item href=''>Toxicity</Dropdown.Item>
            <Dropdown.Item href='#/lightTolerance' onClick={(e) => {e.preventDefault(); this.handleAdvancedLight(1)}}>Light Tolerance </Dropdown.Item>
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
    } else {
      return (
        <AdvancedSearchTile />
      )
    }
  }
}


export default AdvancedSearch;