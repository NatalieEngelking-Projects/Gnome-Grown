import React from 'react';
import '../dist/main.css';

class PlantTable extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    if (this.props.clicked === true ) {
      return null
    } else {
    return (
      <div>
        <table className='plantTable table-bordered table-striped table-dark' >
          <thead className='tableHead'>
            <tr>
              <td className='image'>Image</td>
              <td className='commonName'>Common Name</td>
              <td className='scientificName'>Scientific Name</td>
            </tr>
          </thead>
          <tbody className='tableBody'>
          {this.props.plantData.map((each, i) => {
          return (
            <tr key={i}>         
              <td className='image'> <img className='Image' src={each.image_url} /> </td>
              <td className='commonName'>{each.common_name}</td>
              <td className='scientificName'>{each.scientific_name}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
      </div>
    )
    }
  }
}
export default PlantTable;