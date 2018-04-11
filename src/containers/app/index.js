import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Link } from "react-router-dom"

// Action Creators
import { removeNotification } from "../../modules/notification"

// UI Components
import Notifications from "./components/notifications"
import { Menu } from "semantic-ui-react"
// Routes
import Routes from "./routes"

class App extends Component {
  render() {
    return (
      <div id="app">
        <Menu>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/something">A broken page link</Link>
          </Menu.Item>
        </Menu>

        <Notifications
          notifications={this.props.notifications}
          removeFunc={this.props.removeNotification}
        />
        <Routes />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  notifications: state.notification.notifications
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ removeNotification }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
