import React from 'react'
import Search from './Search.jsx';
import AdvancedSearch from './AdvancedSearch.jsx'
import '../dist/main.css';

class FilterSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advancedClick: false,
      searchData: {},
    }
    // this.filterShadeTolerance = this.filterShadeTolerance.bind(this))
  }
  

// filterShadeTolerance () {
//   console.log(this.props.plantData)
//   this.setState({advancedSearch: true})
//     //if shade tolerance is === intolerant --> return 'needs sun'
//   //if shade tolerance is === tolerant --> return 'needs shade'
// }

  //filterToxicity () {

      //if toxicity === severe --> return toxic
      //if toxicity === none --> return non-toxic
  //}


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
      <AdvancedSearch plantData={this.props.plantData} searchData={this.state.searchData} advancedSearch={this.props.advancedSearch} filterShadeTolerance={this.filterShadeTolerance}/>
      <Search plantData={this.props.plantData} searchData={this.state.searchData} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} searchInput={this.props.searchInput} advancedSearch={this.state.advancedSearch}/>
    </div>
  )
}
}


export default FilterSearch;