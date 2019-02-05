import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
// const dataArray = [
//   { title: "Bike", content: [{ red: 10, blue: 20 }] },
//   { title: "Bus", content: "Lorem ipsum dolor sit amet" },
//   { title: "Train", content: "Lorem ipsum dolor sit amet" }
// ];
export default class FixedLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>Welcome to CCTA!</Text>
        </Header>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
          <Button>
            <Text>Hello World!</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}