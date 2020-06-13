import React from 'react';
import PlantTable from './PlantTable.jsx';
import PlantTile from './PlantTile.jsx';
import FilterSearch from './FilterSearch.jsx';
import image from '!!file-loader!./66487570.jpg';
import '../dist/main.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
      clicked: false,
      plantData: [],
      searchData: {},
      divisionData: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // getData (limit = 500) {
  //   fetch('http://localhost:3004/api/plants')
  //   .then(res => res.json())
  //   .then((plantsData) => {
  //     plantsData.map((eachPlant) => {
  //       if (eachPlant.common_name !== null && this.state.plantData.length <= 30) {
  //         this.setState({ plantData: [...this.state.plantData, eachPlant] })
  //       // } else if (this.state.plantData.length <= 30 && --limit) {
  //       //   console.log(this.state.plantData.length)
  //       //   this.getData()
  //       }
  //     })
  //   })
  //   .catch (err => {
  //     console.log(err)
  //   })
  // }

  componentDidMount () {
    fetch('http://localhost:3004/api/plants')
    .then(res => res.json())
    .then((plantsData) => {
      plantsData.map((eachPlant) => {
        if (eachPlant.common_name !== null && this.state.plantData.length <= 30) {
          this.setState({ plantData: [...this.state.plantData, eachPlant] })
        // } else if (this.state.plantData.length <= 30 && --limit) {
        //   console.log(this.state.plantData.length)
        //   this.getData()
        }
      })
    })
    .catch (err => {
      console.log(err)
    })
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({searchInput: e.target.value})
  }

  handleSubmit (e) {
    e.preventDefault()
    this.state.plantData.map((each) => {
      if (this.state.searchInput.toLowerCase() === each.common_name.toLowerCase()) {
        this.state.clicked = true;
        // fetch(`http://localhost:3004/api/plants?common_name=${this.state.searchInput}`)
        fetch(`http://localhost:3004/api/plants/${each.id}`)
        .then (res => res.json())
        .then ((data) => {
          console.log(data)
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

  render () {
    return (
      <div className='background'>
        <img className='logo' src={image}/>
      <div className='header'>Gnome-Grown</div>
      <FilterSearch plantData={this.state.plantData} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      <PlantTable plantData={this.state.plantData} clicked={this.state.clicked} id={this.state.id} common_name={this.state.common_name} scientific_name={this.state.scientific_name}/>
      <PlantTile searchData={this.state.searchData} clicked={this.state.clicked}/>
      </div>
    )
  }
}

export default App;