import React from 'react';
import AdvancedSearch from './AdvancedSearch.jsx';
import Search from './Search.jsx'
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
      searchData: {},
      advancedSearchData: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  //gets basic plant data as long as the plants common_name !== null
  componentDidMount () {
    fetch('http://localhost:3004/api/v1/plants')
    .then(res => res.json())
    .then((plantsData) => {
      plantsData.data.map((eachPlant) => {
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

  //handles common-name search
  handleChange (e) {
    e.preventDefault();
    this.setState({searchInput: e.target.value})
  }


  render () {
    return (
      <div className='background'>
        <div className='gardenbox neg-30 topleft'></div>
        <div className='gardenbox pos-30 topright'></div>
        <img className='logo' src={image}/>
        <div className='header'>Gnome-Grown</div>
          <AdvancedSearch plantData={this.state.plantData} searchData={this.state.searchData} advancedSearch={this.state.advancedSearch} advancedSearchData={this.state.advancedSearchData} filterShadeTolerance={this.filterShadeTolerance} advancedClick={this.state.advancedClick}/>
          <Search plantData={this.state.plantData} searchData={this.state.searchData} handleChange={this.state.handleChange} handleSubmit={this.state.handleSubmit} searchInput={this.state.searchInput} advancedSearch={this.state.advancedSearch}/>
        <div className='gardenbox pos-30 bottomleft'></div>
        <div className='gardenbox neg-30 bottomright'></div>
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
