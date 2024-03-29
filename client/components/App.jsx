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
      plantData: [],
      divisionData: [],
      searchData: {},
      advancedClicked: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAdvancedClicked = this.handleAdvancedClicked.bind(this)
  }

  //gets basic plant data as long as the plants common_name !== null
  componentDidMount () {
    fetch('http://localhost:3004/api/v1/plants')
    .then(res => res.json())
    .then((plantsData) => {
      console.log(plantsData)
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

  handleAdvancedClicked () {
    this.setState({advancedClicked: true})
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
          <AdvancedSearch plantData={this.state.plantData} searchData={this.state.searchData} advancedClicked={this.state.advancedClicked} handleAdvancedClicked={this.handleAdvancedClicked} />
          <Search plantData={this.state.plantData} advancedClicked={this.state.advancedClicked} searchData={this.state.searchData} handleChange={this.handleChange} searchInput={this.state.searchInput} />
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
