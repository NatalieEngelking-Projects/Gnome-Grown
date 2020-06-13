import React from 'react'
import Search from './Search.jsx';
// import AdvancedSearch from './AdvancedSearch.jsx'
import '../dist/main.css';

class FilterSearch extends React.Component {
  constructor(props) {
    super(props)
  }


//drop down
//search for: 
//plants based on climate, plants based on shade, plants based on sun, plants based on toxicity, plants based on lifespan, plants based on products, plants based on seed/fruit
//plants based on duration (perennial/etc), plants based on foliage(&&/||) color, plants based on drought tolerance (need lots of watering)
filterState_or_Region () {
  //fetch data
  //map over data 
  //filter by state ---> climate
  //
  this.props.plantData.map((eachPlant) => {
    eachPlant.native_status 
  })
}

filterShadeTolerance () {
    //if shade tolerance is === intolerant --> return 'needs sun'
  //if shade tolerance is === tolerant --> return 'needs shade'
}

filterToxicity () {
    //if toxicity === severe --> return toxic
    //if toxicity === none --> return non-toxic
}


filterDuration () {
  //filter by duration
}

filterColor () {
  //filter by flower color
}

filterDroughtTolerance () {
  //filter by tolerance
}

render () {
  return (
    <div>
    <Search plantData={this.props.plantData} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit}/>
    {/* <AdvancedSearch plantData={this.props.plantData}/> */}
    </div>
  )
}
}


export default FilterSearch;