import React from 'react';

class AdvancedSearchTable extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    if (this.props.advancedClicked === true) {
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
            {/* <tbody className='tableBody'>
              {this.props.plantData.map((each, i) => {
              return (
                <tr key={i}>         
                  <td className='image'> <img className='Image' src={each.image_url} /> </td>
                  <td className='commonName' onClick={(e) => {e.preventDefault(); this.props.handleTableClick(each.common_name)}}>{each.common_name}</td>
                  <td className='scientificName'>{each.scientific_name}</td>
                </tr>
                )
              })}
            </tbody> */}
          </table>
        </div>
      )
      
    } else {
      return null
    }
  }
}

export default AdvancedSearchTable;

        {/* generate information on advanced search
        //image
        //common name
        //scientific name
        //mature height
        //growth period
        //regrowth rate
        //shape_and_orientation
        //soils adaption



        conditionally render based on search
        //duration
        //native to ...
        //toxicity
        //climate 
        //lifespan
        //product type
        //seed/fruit
        //foliage flower color
        //drougt tolerance*/}