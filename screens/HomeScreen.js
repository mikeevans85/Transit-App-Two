import React, { Component } from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import { Container, Text, Button, Header, Content, Form, Item, Input, Label, Thumbnail } from 'native-base';
export default class FixedLabelExample extends Component {
   constructor(props) {
    super(props);
    this.state = { 
      text: '',
      password: '' };
  }

  render() {
    const uri = "https://previews.123rf.com/images/ljupco/ljupco1403/ljupco140300270/26863909-smiling-senior-man-holding-a-big-black-arrow-pointing-down-isolated-on-white-background.jpg"
    return (
      <Container>
        <Header>
          <Text>Welcome to CCTA!</Text>
        </Header>
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input 
              style={{height: 40}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}/>
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input 
              style={{height: 40}}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}/>
            </Item>
          </Form>
          <Button style={{
            alignSelf: 'center'
          }}
          onPress={() => sendLoginInfo()}
            >
            <Text>Login</Text>
          </Button>
          <Thumbnail style = {{
            height: 400,
            width: 300,
            paddingRight: 200,
            paddingLeft: 200,
          }}square large source={{uri: uri}} />
        </Content>
      </Container>
    );
  }
}


