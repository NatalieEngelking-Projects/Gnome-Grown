import React from 'react';
import '../dist/main.css';

class PlantTile extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    console.log(this.props)
    return (
      <tbody className='tableBody'>
        {this.props.data.map((each, i) => { 
          {console.log(each)}
        return (
          <tr>         
            <td className='ID'>{each.id}</td>
            <td className='commonName'>{each.common_name}</td>
            <td className='scientificName'>{each.scientific_name}</td>
            <td className='link'>{each.link}</td>
          </tr>
        )
      })}
      </tbody>
    )
  }
}

export default PlantTile;