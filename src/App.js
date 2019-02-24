import React, {Component} from 'react'
import {withRouter} from 'react-router'
import './main.css'

import Header from './containers/header'
import Content from './containers/content'
import Footer from './containers/footer'

const pages = ['home', 'about-me', 'portfolio', 'contacts']

class App extends Component {
  state = {
    defaultPage: 1
  }

  componentWillMount() {
    this.checkUrl()
  }

  checkUrl = async () => {
    let pageIndex = 1
    if (this.props.match.params.page) {
      pageIndex = pages.findIndex(page => page === this.props.match.params.page)
      if (pageIndex < 0) {
        console.error('No page found')
        return
      }
      pageIndex++
    }
    await this.setState({defaultPage: pageIndex})
  }

  componentDidUpdate(prevProps) {
    const {location} = this.props
    const {location: prevLocation} = prevProps
    const isUrlChanged = (location.pathname !== prevLocation.pathname) || (location.search !== prevLocation.search)
    if (isUrlChanged) {
      let prevLocArr = prevLocation.pathname.split('/')
      let locArr = location.pathname.split('/')
      if (prevLocArr[1] !== locArr[1]) {
        this.checkUrl()
      }
    }
  }

  render() {
    let {defaultPage} = this.state
    return (
      <div className="app">
        <Header />
        <Content defaultPage={defaultPage} />
        <Footer />
      </div>
    )
  }
}

export default withRouter(App)
