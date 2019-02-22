import React, { Component } from "react";
import { Text } from "native-base";
import { View } from "react-native";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  };

  render() {
    const name = this.props.navigation.getParam('bus', true);
    const location = this.props.navigation.getParam('location', true);
    return (
      <View>
        <Text>{name} {location}</Text>
      </View>
    );
  }
}
