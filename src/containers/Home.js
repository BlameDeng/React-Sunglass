import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getNewArrival, getAllProducts } from '../actions'
import HomeNavBar from '../components/home/HomeNavBar'
import HomeIndex from '../components/home/HomeIndex'
import HomeCategory from '../components/home/HomeCategory'

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
        {this.state.category === 'index' ? (
          <HomeIndex {...this.props} />
        ) : (
          <HomeCategory {...this.props} category={this.state.category} />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  newArrival: state.newArrival,
  allProducts: state.allProducts
})

const mapDispatchToProps = dispatch => ({
  getNewArrival: () => dispatch(getNewArrival()),
  getAllProducts: () => dispatch(getAllProducts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
