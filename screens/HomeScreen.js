import React, { Component } from 'react';
import { Container, Text, Button, Header, Content, Form, Item, Input, Label } from 'native-base';
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
