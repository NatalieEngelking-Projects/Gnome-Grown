import React from 'react';
import e from 'express';

class AdvancedSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advancedSearch: false
    }
  }

  handleClick () {
    e.preventDefault()
    this.setState({advancedSearch: true})
  }

  render() {
    if (advancedSearch === true) {
      return (
        <div>
          {/* <form>
            <input type='submit' value='Advanced Search'/>
            <input type='text'/>
          </form> */}
        </div>
      )
    } else {
      return null;
    }
  }
}

export default AdvancedSearch;