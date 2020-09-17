import React from 'react'
import Search from './Search.jsx';
import AdvancedSearch from './AdvancedSearch.jsx'
import '../dist/main.css';

class FilterSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: {},
      advancedSearchData: [],
      advancedClick: false,
    }
    // this.filterShadeTolerance = this.filterShadeTolerance.bind(this))
  }
  

// filterShadeTolerance () {
//   console.log(this.props.plantData)
//   this.setState({advancedSearch: true})
//     //if shade tolerance is === intolerant --> return 'needs sun'
//   //if shade tolerance is === tolerant --> return 'needs shade'
// }



render () {
  return (
    <div>
      <AdvancedSearch plantData={this.props.plantData} searchData={this.state.searchData} advancedSearch={this.props.advancedSearch} advancedSearchData={this.state.advancedSearchData} filterShadeTolerance={this.filterShadeTolerance} advancedClick={this.state.advancedClick}/>
      <Search plantData={this.props.plantData} searchData={this.state.searchData} handleChange={this.props.handleChange} handleSubmit={this.props.handleSubmit} searchInput={this.props.searchInput} advancedSearch={this.state.advancedSearch}/>
    </div>
  )
}
}


export default FilterSearch;