import React, { Component } from "react";
import { Text } from "native-base";
import { View } from "react-native";

export default class extends Component {
	constructor(props) {
    super(props);
    this.state = { isLoading: true };
  };

  render() {
    const name = this.props.navigation.getParam('train', true);
    const latitude = this.props.navigation.getParam('latitude', true);
    return (
      <View>
        <Text>{name} {latitude}</Text>
      </View>
    );
  }
}