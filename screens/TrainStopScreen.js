import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body  } from "native-base";
import { StyleSheet, View } from "react-native";
import { Location, Permissions } from "expo";

export default class extends Component {
	constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      latitude: '',
      longitude: '' 
    };
  }

  componentDidMount() {
    return fetch('https://mywebsite.com/endpoint/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: this.location,
    secondParam: 'yourOtherValue',
  }),
}).then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const name = this.props.navigation.getParam('train', true);
    const latitude = this.props.navigation.getParam('latitude', true);
    return (
    <Container>
        <Header>
          <Text style={styles.titleText}>{name}</Text>
        </Header>
        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert(`This is the ${name}`)}>
              <Text style={styles.titleText}>Stop Name</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is the latitude")}>
              <Body>
                <Text>
                  {latitude}
                  Other Train Info
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
              <Text>Other Things Can Go Here Oh Wow</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});