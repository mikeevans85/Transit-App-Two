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
      longitude: '' };
  };

  componentDidMount() {
    const name = this.props.navigation.getParam('train', true);
    const latitude = this.props.navigation.getParam('latitude', true);
    const longitude = this.props.navigation.getParam('longitude', true);
    return fetch(`https://hidden-gorge-19159.herokuapp.com/api/stations/?api_name=lstops&latitude=${latitude}&longitude=${longitude}`, {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}).then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      return responseJson.data;
    })
    this.setState(
          {
            isLoading: false,
            dataSource: responseJson.data,
          },
          function() {}
        )
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    const name = this.props.navigation.getParam('bus', true);
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
            <CardItem button onPress={() => alert(`${latitude}{longitude}`)}>
              <Body>
                <Text>
                  {latitude}
                  {longitude}
                  Other Bus Info
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

