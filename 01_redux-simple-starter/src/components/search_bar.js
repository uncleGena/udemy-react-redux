import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: 'dddd'
    }
  }

  onInputChange(term) {
    this.setState({ term: term })
    this.props.onSearchTermChange(term)
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={ev => this.onInputChange(ev.target.value)}
        />
      </div>


    )
  }

}

export default SearchBar