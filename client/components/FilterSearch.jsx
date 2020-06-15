import React from 'react'
import Search from './Search.jsx';
import AdvancedSearch from './AdvancedSearch.jsx'
import '../dist/main.css';

class FilterSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      advancedClick: false,
    }
    // this.filterShadeTolerance = this.filterShadeTolerance.bind(this)
    // console.log(this.props)
  }

//drop down
//search for: 
//plants based on climate, plants based on shade, plants based on sun, plants based on toxicity, plants based on lifespan, plants based on products, plants based on seed/fruit
//plants based on duration (perennial/etc), plants based on foliage(&&/||) color, plants based on drought tolerance (need lots of watering)
  // filterState_or_Region () {
  //   //fetch data
  //   //map over data 
  //   //filter by state ---> climate
  //   this.setState({advancedSearch: true})

  //   this.props.plantData.map((eachPlant) => {
  //     eachPlant.native_status 
  //   })
  // }

// filterShadeTolerance () {
//   console.log(this.props.plantData)
//   this.setState({advancedSearch: true})
//     //if shade tolerance is === intolerant --> return 'needs sun'
//   //if shade tolerance is === tolerant --> return 'needs shade'
// }

  filterToxicity () {

      //if toxicity === severe --> return toxic
      //if toxicity === none --> return non-toxic
  }


  // filterDuration () {
  //   //filter by duration
  // }

  // filterColor () {
  //   //filter by flower color
  // }

  // filterDroughtTolerance () {
  //   //filter by tolerance
  // }

render () {
  return (
    <div>
      <input className='advancedSearch' type='submit' value='Advanced Search' onClick={this.props.handleClick}/>
      <Search plantData={this.props.plantData} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} searchInput={this.props.searchInput} advancedSearch={this.state.advancedSearch}/>
      <AdvancedSearch plantData={this.props.plantData} advancedSearch={this.props.advancedSearch} filterShadeTolerance={this.filterShadeTolerance}/>
    </div>
  )
}
}


export default FilterSearch;