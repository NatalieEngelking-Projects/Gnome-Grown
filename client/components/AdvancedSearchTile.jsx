import React from 'react';

class AdvancedSearchTile extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    console.log(this.props.shadeData)
    return (
      <div>
        advanced search tile
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
      <table className='shadeTable table-bordered table-striped table-dark '>
        <tr>
          
        </tr>
      </table>


      </div>
    )
  }
}

export default AdvancedSearchTile;
