import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body  } from "native-base";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Location, Permissions } from "expo";

export default class extends Component {
	constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      stuff: [],
      name: ''
      // api_id: ''
    };
  };

  componentDidMount() {
    const name = this.props.navigation.getParam('train', true);
    // const stuff = this.props.navigation.getParam('stuff', true);
    const color = name.replace(/ .*/,'').toLowerCase();
    return fetch(`https://hidden-gorge-19159.herokuapp.com/api/lstops`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: {
    station_id: 17082,
    // color: 'color'
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
    const name = this.props.navigation.getParam('train', true);
    const color = name.replace(/ .*/,'').toLowerCase();

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
                  {color}
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