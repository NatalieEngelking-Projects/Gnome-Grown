import React from 'react';
import PlantTable from './PlantTable.jsx';
import PlantTile from './PlantTile.jsx';
import '../dist/main.css';



class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
      plantName: ''
    }    
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTableClick = this.handleTableClick.bind(this)
  }

  fixCapitalize () {
    this.state.plantData.map((each) => {
      
    })
  }
  

handleTableClick (name) {
  console.log(name)
  this.state.clicked = true;
  fetch(`http://localhost:3004/api/v1/plants/search_commonName/${name}`)
  .then(res => res.json())
  .then((plant) => {
    fetch(`http://localhost:3004/api/plants/${plant.data[0].id}`)
      .then (res => res.json())
      .then((plantData) => {
        console.log(plantData)
        this.setState({
          searchData: {
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
      })
  })
}


  //refactor for when you click on the plant
  handleSubmit (e) {
    e.preventDefault()
          this.state.clicked = true;
          fetch(`http://localhost:3004/api/v1/plants/search/${this.props.searchInput}`)
          .then (res => res.json())
          .then ((plant) => {
            console.log(plant)
            console.log(plant.data[0].id)
            //fetch by the plant id
            fetch(`http://localhost:3004/api/plants/${plant.data[0].id}`)
            .then (res => res.json())
            .then((plantData) => {
              console.log(plantData)
              this.setState({
                searchData: {
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
            })
          })
          .catch (err => console.log(err))
      }
  

  render() {
    return (
      <div>
        <form>
          <input className='searchInput' type='text' name='search' onChange={this.props.handleChange}/>
          <input className='searchSubmit' type='submit' value='Search' onClick={this.handleSubmit}/>
        </form>
        <PlantTable clicked={this.state.clicked} plantData={this.props.plantData}  advancedSearch={this.props.advancedSearch} advancedClicked={this.props.advancedClicked} handleSubmit={this.handleSubmit} handleTableClick={this.handleTableClick} plantName={this.state.plantName}/>
        <PlantTile clicked={this.state.clicked} plantData={this.props.plantData} searchData={this.state.searchData} />
      </div>
    )
  }

}
export default Search;