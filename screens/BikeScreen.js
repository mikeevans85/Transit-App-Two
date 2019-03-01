import React, { Component } from "react";
import { Location, Permissions } from "expo";
import { Container, Header, Content, Card, CardItem, Text, Body, Icon, Left, Button } from "native-base";
import { FlatList, ActivityIndicator, View } from "react-native";
import BikeRackScreen from "../navigation/AppNavigator";

export default class CardItemBordered extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch("https://facebook.github.io/react-native/movies.json")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.movies
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <Card />
        </View>
      );
    }

    return (
      <View>
        <Button iconRight onPress={() => this.props.navigation.navigate("BikeRacks")}>
          <Text>Find Bike Parking Nearby</Text>
          <Icon name="bicycle" />
        </Button>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <Card>
              <CardItem cardBody>
                <Text>{item.title}</Text>
                <Text>{this.state.latitude}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>Available Bikes: {item.releaseYear}</Text>
                  <Text>Available Docks: {item.id}</Text>
                  <Left>
                    <Button transparent>
                      <Icon name="star" type="Ionicons" />
                    </Button>
                  </Left>
                </Body>
              </CardItem>
            </Card>
          )}
          keyExtractor={({ id }, index) => id}
        />
      </View>
    );
  }
}
