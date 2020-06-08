import React from 'react';
import PlantTile from './PlantTile.jsx';
import '../dist/main.css';

class PlantTable extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <table className='plantTable table-bordered table-striped table-light' >
          <thead className='tableHead'>
            <tr>
              <td className='ID'>ID</td>
              <td className='commonName'>Common Name</td>
              <td className='scientificName'>Scientific Name</td>
              <td className='link'>Link</td>
            </tr>
          </thead>
            <PlantTile data={this.props.data}/>
        </table>

      </div>
    )
  }
}

export default PlantTable;