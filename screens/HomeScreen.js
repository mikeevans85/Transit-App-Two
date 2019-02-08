import React, { Component } from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
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
          <Button style={{
            alignSelf: 'center'
          }}>
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}


