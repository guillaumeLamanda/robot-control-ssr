import React, { Component } from "react"
import { Grid, Button, Divider, Header } from "semantic-ui-react"

class RobotControl extends Component {
  state = {}
  render() {
    return (
      <Grid>
        <Grid.Row centered>
          <Header textAlign="center" as="h2" content="Commandes" />
        </Grid.Row>
        <Grid.Row centered>
          <Button size="huge" content="avancer" />
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column textAlign="center">
            <Button size="huge" content="gauche" />
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Button size="huge" content="droite" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Button size="huge" content="reculer" />
        </Grid.Row>
        <Divider />
        <Grid.Row columns="2">
          <Grid.Column textAlign="center">
            <Button basic size="huge" color="red" content="manuel" />
          </Grid.Column>
          <Grid.Column textAlign="center">
            <Button basic size="huge" color="green" content="automatique" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default RobotControl
