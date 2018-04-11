import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Page from "../../components/page"
import { addNotification } from "../../../../modules/notification"
import { Header, Grid, Button } from "semantic-ui-react"
import RobotControl from "../../components/robot/control"
import RobotConsole from "../../components/robot/console"

class Homepage extends Component {
  render() {
    return (
      <Page title="Homepage" id="homepage">
        <Header as="h1" content="Contrôle du robot" textAlign="center" />

        <Grid columns="2" verticalAlign="middle" stretched>
          <Grid.Column stretched>
            <RobotControl />
          </Grid.Column>
          <Grid.Column stretched>
            <RobotConsole />
          </Grid.Column>
        </Grid>

        {/* <button
          onClick={() => this.props.addNotification({ text: "this is great" })}
        >
          Add notification
        </button> */}
      </Page>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addNotification }, dispatch)

export default connect(null, mapDispatchToProps)(Homepage)
