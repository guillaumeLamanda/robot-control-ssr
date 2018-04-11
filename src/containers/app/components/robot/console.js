import React, { Component } from "react"
import { Segment, Header, Grid } from "semantic-ui-react"

class RobotConsole extends Component {
  state = {
    content: "Test"
  }
  render() {
    const { content } = this.state
    return (
      <Grid>
        <Header textAlign="center" as="h2" content="Console" />
        <Grid.Row>
          <Segment stacked attached="top" inverted>
            {content}
          </Segment>
        </Grid.Row>
      </Grid>
    )
  }
}

export default RobotConsole
