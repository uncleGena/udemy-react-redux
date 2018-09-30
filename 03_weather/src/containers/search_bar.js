import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = { term: '' };

    this.focusInput = React.createRef()
    setTimeout(() => {
      this.focusInput.current.focus()
    }, 333)

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange (ev) {
    this.setState({
      term: ev.target.value
    })
  }

  onFormSubmit (ev) {
    ev.preventDefault()

    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day ... "
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          ref={this.focusInput}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchWeather}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)