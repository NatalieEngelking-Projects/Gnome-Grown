import React from 'react';
import PlantTable from './PlantTable.jsx';
import PlantTile from './PlantTile.jsx'
import '../dist/main.css';



class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }    
    this.handleSubmit = this.handleSubmit.bind(this)
  }




  //refactor for when you click on the plant
  handleSubmit (e) {
    e.preventDefault()
      this.props.plantData.map((each) => {
        if (this.props.searchInput.toLowerCase() === each.common_name.toLowerCase()) {
          this.state.clicked = true;
          fetch(`http://localhost:3004/api/plants/${each.id}`)
          .then (res => res.json())
          .then ((plant) => {
            console.log(plant.data)
                this.setState({
                  searchData: {
                    id: plant.data.id, 
                    common_name: plant.data.common_name, 
                    family_common_name: plant.data.family_common_name,
                    scientific_name: plant.data.scientific_name,
                    duration: plant.data.main_species.specifications.duration,
                    shape_and_orientation: plant.data.main_species.specifications.shape_and_orientation,
                    toxicity: plant.data.main_species.specifications.toxicity,
                    specifications: plant.data.main_species.specifications,
                    growth: plant.data.main_species.growth,
                    fruit_or_seed: plant.data.main_species.fruit_or_seed,
                    foliage: plant.data.main_species.foliage,
                    flower: plant.data.main_species.flower,
                    image: plant.data.image_url,
                  }
                })
          })
          .catch (err => console.log(err))
        } else {
          return 'this flower does not exist'
        }
      })
  }


  render() {
    return (
      <div>
        <form>
          <input className='searchInput' type='text' name='search' onChange={this.props.handleChange}/>
          <input className='searchSubmit' type='submit' value='Search' onClick={this.handleSubmit}/>
        </form>
        <PlantTable clicked={this.state.clicked} plantData={this.props.plantData}  advancedSearch={this.props.advancedSearch}/>
        <PlantTile clicked={this.state.clicked} plantData={this.props.plantData} searchData={this.state.searchData}/>
      </div>
    )
  }
}

export default Search;