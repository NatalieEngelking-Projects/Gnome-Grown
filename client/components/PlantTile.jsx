import React from 'react';
import '../dist/main.css';

class PlantTile extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    if (this.props.clicked === false) {     
      return null
    } else {
      console.log(this.props.searchData)
      return (
        <div className="plantModal">
          <div> <img  className='plantTileImage' src={this.props.searchData.image}/> </div>  

          <table className='modalTable table-striped table-bordered table-dark' >
            <thead>
              <tr className='modalHead'>Basic Information</tr>
            </thead>
            <tbody>
                <tr className='modalInfo'>Common Name: <td className='modalData'>{this.props.searchData.common_name}</td></tr>
                <tr className='modalInfo'>Family Common Name: <td className='modalData'>{this.props.searchData.family_common_name}</td></tr>
                <tr className='modalInfo'>Scientific Name: <td className='modalData'>{this.props.searchData.scientific_name}</td></tr>
                <tr className='modalInfo'>Native Status: <td className='modalData'>{this.props.searchData.native_status}</td></tr>
                <tr className='modalInfo'>Toxicity: <td className='modalData'>{this.props.searchData.toxicity}</td></tr>
            </tbody>
          </table>

        
          <table className='modalTable table-striped table-bordered table-dark' >
            <thead>
              <tr className='modalHead'>Growth Information</tr>
            </thead>
            <tbody>
                <tr className='modalInfo'>Duration: <td className='modalData'>{this.props.searchData.duration}</td> </tr>
                <tr className='modalInfo'>Light: <td className='modalData'> {this.props.searchData.growth.light}</td></tr>
                <tr className='modalInfo'>Precipitation Range: <td className='modalData'>{this.props.searchData.growth.minimum_precipitation.mm}mm - {this.props.searchData.growth.maximum_precipitation.mm}mm</td></tr>
                <tr className='modalInfo'>Spread: <td className='modalData'> {this.props.searchData.growth.spread.cm}</td></tr>
                <tr className='modalInfo'>Row Spacing: <td className='modalData'>{this.props.searchData.growth.row_spacing.cm}</td></tr>
                <tr className='modalInfo'>Bloom Months: <td className='modalData'>{this.props.searchData.growth.bloom_months}</td></tr>
                <tr className='modalInfo'>Fruit Months: <td className='modalData'>{this.props.searchData.growth.fruit_months}</td></tr>
                <tr className='modalInfo'>Tempature: <td className='modalData'>{this.props.searchData.growth.minimum_temperature.deg_f} - {this.props.searchData.growth.maximum_temperature.deg_f}</td></tr>
                <tr className='modalInfo'>PH level: <td className='modalData'>{this.props.searchData.growth.ph_minimum} - {this.props.searchData.growth.ph_maximum}</td></tr>
                <tr className='modalInfo'>Growth Form: <td className='modalData'>{this.props.searchData.specifications.growth_form}</td></tr>
                <tr className='modalInfo'>Growth Rate: <td className='modalData'>{this.props.searchData.specifications.growth_rate}</td></tr>
            </tbody>
          </table>

          <table className='modalTable table-striped table-bordered table-dark' >
            <thead>
              <tr className='modalHead'>Growth Information</tr>
            </thead>
            <tbody>
                <tr className='modalInfo'>Shape and Orientation: <td className='modalData'>{this.props.searchData.shape_and_orientation}</td></tr>
                <tr className='modalInfo'>Average Height:<td className='modalData'> {this.props.searchData.specifications.average_height.cm}cm</td></tr>
                <tr className='modalInfo'>Flower Color: <td className='modalData'>{this.props.searchData.flower.color}</td></tr>
                <tr className='modalInfo'>Foliage Color: <td className='modalData'>{this.props.searchData.foliage.color}</td></tr>
                <tr className='modalInfo'>Foliage Texture: <td className='modalData'>{this.props.searchData.foliage.texture}</td></tr>
            </tbody>
          </table>
        </div>
      )
// growth.bloom months, fruit months
//image, veggie, year?
// specs. avg height growth rate, 
//family, genus, 
//distribution. native, introduced
//native status === a map that highlights each state
    }
  }
}

export default PlantTile;