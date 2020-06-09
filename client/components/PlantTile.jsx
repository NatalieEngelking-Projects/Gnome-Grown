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

      return (
        <div className="plantModal">
            <img src={this.props.searchData.images}/>
          <table className='modalTable table-striped table-bordered table-dark' >
            <tbody>
                <tr className='modalInfo'>Common Name: <td className='modalData'>{this.props.searchData.common_name}</td></tr>
                <tr className='modalInfo'>Family Common Name: <td className='modalData'>{this.props.searchData.family_common_name}</td></tr>
                <tr className='modalInfo'>Scientific Name: <td className='modalData'>{this.props.searchData.scientific_name}</td></tr>
                <tr className='modalInfo'>Lifespan: <td className='modalData'>{this.props.searchData.lifespan}</td></tr>
                <tr className='modalInfo'>Native Status: <td className='modalData'>{this.props.searchData.native_status}</td></tr>
                <tr className='modalInfo'>Growth Period: <td className='modalData'>{this.props.searchData.growth_period}</td> </tr>
                <tr className='modalInfo'>Shape and Orientation: <td className='modalData'>{this.props.searchData.shape_and_orientation}</td></tr>
                <tr className='modalInfo'>Toxicity: <td className='modalData'>{this.props.searchData.toxicity}</td></tr>
                <tr className='modalInfo'>Mature Height: <td className='modalData'>{this.props.searchData.mature_height}</td></tr>
                <tr className='modalInfo'>Soil Adaptation: <td className='modalData'>{this.props.searchData.soils_adaptation}</td></tr>
                <tr className='modalInfo'>Regrowth Rate:<td className='modalData'> {this.props.searchData.regrowth_rate}</td></tr>
                <tr className='modalInfo'>Flower Color: <td className='modalData'>{this.props.searchData.flower.color}</td></tr>
                <tr className='modalInfo'>Foliage Color: <td className='modalData'>{this.props.searchData.foliage.color}</td></tr>
                <tr className='modalInfo'>Foliage Texture: <td className='modalData'>{this.props.searchData.foliage.texture}</td></tr>
                <tr className='modalInfo'>Shade Tolerance:<td className='modalData'> {this.props.searchData.growth.shade_tolerance}</td></tr>
                <tr className='modalInfo'>Drought Tolerance:<td className='modalData'> {this.props.searchData.growth.drought_tolerance}</td></tr>
                <tr className='modalInfo'>Fire Tolerance:<td className='modalData'> {this.props.searchData.growth.fire_tolerance}</td></tr>
                <tr className='modalInfo'>Resprout Ability: <td className='modalData'>{this.props.searchData.growth.resprout_ability}</td></tr>
                <tr className='modalInfo'>Shade Tolerance: <td className='modalData'>{this.props.searchData.growth.shade_tolerance}</td></tr>
                <tr className='modalInfo'>Planting Density: <td className='modalData'>{this.props.searchData.growth.planting_density_minimum.sqm}sqm - {this.props.searchData.growth.planting_density_maximum.sqm}sqm</td></tr>
                <tr className='modalInfo'>Tempature Minimum: <td className='modalData'>{this.props.searchData.growth.temperature_minimum.deg_f}</td></tr>
            </tbody>
          </table>

        </div>
      )

    }
  }
}

export default PlantTile;