import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators3'
import { Link } from 'react-router'

// Another way to declare a component (The ES6 way)
class Header extends React.Component {
  // Because we are using ES6 classes we absolutely need this constructor in
  // order to make sure we are using the correct "this", i.e. that "this" points
  // to our Header object.
  constructor (props) {
    super(props) // This is needed to pass props to the component

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this)
  }
  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value))
  } // no commas in ES6 classes
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header>
        <h1>
          <Link to='/'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

const { func, bool, string } = React.PropTypes
Header.propTypes = {
  dispatch: func,
  showSearch: bool,
  searchTerm: string
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

export default connect(mapStateToProps)(Header)
