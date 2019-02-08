import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Badge, Container, Header, Content, Icon, List, ListItem, Text } from 'native-base';
export default class TrainScreen extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem>
            <Badge>
              <Text>Red Line</Text>
            </Badge>
            </ListItem>
            <ListItem>
            <Badge primary>
              <Text>Blue Line</Text>
            </Badge>
            </ListItem>
            <ListItem>
            <Badge success>
              <Text>Green Line</Text>
            </Badge>
            </ListItem>
            <ListItem>
            <Badge danger>
              <Text>Brown Line</Text>
            </Badge>
            </ListItem>
            <ListItem>
            <Badge warning>
              <Text>Orange Line</Text>
            </Badge>
            </ListItem>
            <ListItem>
            <Badge Yellow>
              <Text>Yellow Line</Text>
            </Badge>
            </ListItem>
            <ListItem>
            <Badge success>
              <Text>Purple Line</Text>
            </Badge>
            </ListItem>
            <ListItem>
            <Badge success>
              <Text>Pink Line</Text>
            </Badge>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}