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
    return fetch('https://hidden-gorge-19159.herokuapp.com/api/stations/', {
  method: 'POST',
  mode: "cors",
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    api_name: "divvy",
    latitude: 41.939743,
    longitude: -87.658865,
  }),
}).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.data);
      return responseJson.data;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const name = this.props.navigation.getParam('train', true);
    const latitude = this.props.navigation.getParam('latitude', true);
    const longitude = this.props.navigation.getParam('longitude', true);
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
                  {longitude}
                  Other Train Info
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Other Things Oh Wow")}>
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