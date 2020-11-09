import React from "react";
import { Grid, Button, Image, Divider, Header, Icon } from "semantic-ui-react";

import md from "./마당이.jpg";
import Comments from "./Comment.js";
import MenuExampleBasic from "./Menu.js";
import Board from "./board.js";

function App() {
  return (
    <div>
      <Grid centered>
        <Grid.Row>
          <Image src={md} centered />
        </Grid.Row>
        <Grid.Row>
          <Button
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "0",
            }}
          />
          <Button
            basic
            color="blue"
            content="Share"
            icon="fork"
            label={{
              as: "a",
              basic: true,
              color: "blue",
              pointing: "left",
              content: "0",
            }}
          />
        </Grid.Row>
      </Grid>

      <Divider horizontal>
        <Header as="h4">
          <Icon name="comment alternate" />
          댓글을 달아주세요!
        </Header>
      </Divider>
      <Comments />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="micro chip" />
          Contack me!
        </Header>
      </Divider>
      <br />
      <div>
        <Grid centered>
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="twitter" icon="twitter" />
          <Button circular color="linkedin" icon="linkedin" />
          <Button circular color="google plus" icon="google plus" />
        </Grid>
      </div>
      <MenuExampleBasic />
    </div>
    <Board />
  );
}

export default App;
