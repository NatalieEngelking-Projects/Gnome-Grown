import React from 'react'
import PlantTable from './PlantTable.jsx';
import Search from './Search.jsx'
import '../dist/main.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      common_name: '',
      link: '',
      scientific_name: '',
      slug: '',
      complete_data: '',
      searchInput: ',',
      data: [],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    fetch('http://localhost:3004/api/plants')
    .then(res => res.json())
    .then((data) => {
      data.map((each) => {

        this.setState({
          id: each.id,
          common_name: each.common_name,
          link: each.link,
          scientific_name: each.scientific_name,
          slug: each.slug,
          complete_data: each.complete_data,
          searchInput: '',
          data: data
        })
      })
    })
    .catch (err => {
      console.log(err)
    })
  }

  handleChange (e) {
    this.setState({searchInput: e.target.value})
  }

  render () {
    return (
      <div>
      <div className='header'>Gnome-Grown</div>
      <Search handleChange={this.handleChange}/>
      <PlantTable data={this.state.data}/>
      </div>
    )
  }
}

export default App;