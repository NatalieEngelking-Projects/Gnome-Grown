import React from 'react';
import '../dist/main.css';

class PlantTile extends React.Component {
  constructor(props) {
    super(props)
    this.convertCmToIn = this.convertCmToIn.bind(this);
    this.convertMmToIn = this.convertMmToIn.bind(this);
    this.convertMonths = this.convertMonths.bind(this);
    this.convertLight = this.convertLight.bind(this);
    // this.capWords = this.capWords.bind(this)
  }

  convertCmToIn (number) {
    if (number === null) {
      return null
    }
    //0.3937008in === 1 cm
    let num = number * 0.3937008;
    let result = Math.ceil(num);
    return result;
  }
  
  convertMmToIn (number) {
    if (number === null) {
      return null
    }
    //0.03937008in === 1 mm
    let num = number * 0.03937008;
    let result = Math.ceil(num)
    return result;
  }
  
  convertMonths (array) {
    if (array === null) {
      return null
    }

    let result = []
    array.map((each) => {
      each = each[0].toUpperCase() + each[1] + each[2];
      result.push(each + ', ');
    })
    return result;
  }

  convertLight (number) {
    if (number === null) {
      return null
    }

    if (number <= 3) {
      return 'Little to None';
    } else if (number <= 7) {
      return 'Needs Some';
    } else {
      return 'Full Sun'
    }
  }

  // capWords (words) {
  //   let result = '';
  //   for (let i = 0; i <= words.length; i++) {
  //     let word = words[i][0].toUpperCase();
  //     result = result + word;
  //   }
  //   return result
  // }



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
                <tr className='modalInfo'>Light: <td className='modalData'> {this.convertLight(this.props.searchData.growth.light)}</td></tr>
                <tr className='modalInfo'>Precipitation Range: <td className='modalData'>{this.convertMmToIn(this.props.searchData.growth.minimum_precipitation.mm)}in - {this.convertMmToIn(this.props.searchData.growth.maximum_precipitation.mm)}in</td></tr>
                <tr className='modalInfo'>Spread: <td className='modalData'> {this.props.searchData.growth.spread.cm}</td></tr>
                <tr className='modalInfo'>Row Spacing: <td className='modalData'>{this.props.searchData.growth.row_spacing.cm}</td></tr>
                <tr className='modalInfo'>Bloom Months: <td className='modalData'>{this.convertMonths(this.props.searchData.growth.bloom_months)}</td></tr>
                <tr className='modalInfo'>Fruit Months: <td className='modalData'>{this.props.searchData.growth.fruit_months}</td></tr>
                <tr className='modalInfo'>Tempature: <td className='modalData'>{this.props.searchData.growth.minimum_temperature.deg_f} - {this.props.searchData.growth.maximum_temperature.deg_f}</td></tr>
                <tr className='modalInfo'>PH level: <td className='modalData'>{this.props.searchData.growth.ph_minimum} - {this.props.searchData.growth.ph_maximum}</td></tr>
                <tr className='modalInfo'>Growth Form: <td className='modalData'>{this.props.searchData.specifications.growth_form}</td></tr>
                <tr className='modalInfo'>Growth Rate: <td className='modalData'>{this.props.searchData.specifications.growth_rate}</td></tr>
            </tbody>
          </table>

          <table className='modalTable table-striped table-bordered table-dark' >
            <thead>
              <tr className='modalHead'>Plant Information</tr>
            </thead>
            <tbody>
                <tr className='modalInfo'>Shape and Orientation: <td className='modalData'>{this.props.searchData.shape_and_orientation}</td></tr>
                <tr className='modalInfo'>Average Height:<td className='modalData'> {this.convertCmToIn(this.props.searchData.specifications.average_height.cm)}in</td></tr>
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