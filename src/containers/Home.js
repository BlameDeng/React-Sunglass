import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNewArrival } from '../actions'
import HomeNavBar from '../components/home/HomeNavBar'
import HomeIndex from '../components/home/HomeIndex'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      category: 'index'
    }
  }

  handleChangeCategory(category) {
    this.setState({ category })
  }

  render() {
    return (
      <div className="home">
        <HomeNavBar
          category={this.state.category}
          changeCategory={this.handleChangeCategory.bind(this)}
        />
        <HomeIndex {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newArrival: state.newArrival
})

const mapDispatchToProps = dispatch => ({
  getNewArrival: () => dispatch(getNewArrival())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
