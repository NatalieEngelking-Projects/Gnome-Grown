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
      advancedSearch: false,
      plantData: [],
      divisionData: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount () {
    fetch('http://localhost:3004/api/plants')
    .then(res => res.json())
    .then((plantsData) => {
      plantsData.map((eachPlant) => {
        if (eachPlant.common_name !== null && this.state.plantData.length <= 30) {
          this.setState({ plantData: [...this.state.plantData, eachPlant] })
        }
      })
    })
    .catch (err => {
      console.log(err)
    })
  }

  handleClick (e) {
    e.preventDefault()
    this.setState({advancedSearch: true})
  }

  handleChange (e) {
    e.preventDefault();
    this.setState({searchInput: e.target.value})
  }


  render () {
    return (
      <div className='background'>
        <img className='logo' src={image}/>
      <div className='header'>Gnome-Grown</div>
      <FilterSearch plantData={this.state.plantData} searchInput={this.state.searchInput} searchData={this.state.searchData} advancedSearch={this.state.advancedSearch}
      handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleClick={this.handleChange}/>
      </div>
    )
  }
}

export default App;


//  filter incoming data --> initially used recursion
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
