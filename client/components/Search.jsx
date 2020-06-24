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
          .then ((data) => {
                this.setState({
                  searchData: {
                    id: data.id, 
                    common_name: data.common_name, 
                    family_common_name: data.family_common_name,
                    scientific_name: data.scientific_name,
                    images: data.main_species.images.url,
                    native_status: data.native_status,
                    products: data,
                    lifespan: data.main_species.specifications.lifespan,
                    mature_height: data.main_species.specifications.mature_height.ft,
                    growth_period: data.main_species.specifications.growth_period,
                    regrowth_rate: data.main_species.specifications.regrowth_rate,
                    shape_and_orientation: data.main_species.specifications.shape_and_orientation,
                    toxicity: data.main_species.specifications.toxicity,
                    hybrid: data,
                    soils_adaption: data.main_species.soils_adaption,
                    seed: data.main_species.seed,
                    propagation: data.main_species.propagation,
                    growth: data.main_species.growth,
                    fruit_or_seed: data.main_species.fruit_or_seed,
                    foliage: data.main_species.foliage,
                    flower: data.main_species.flower,
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