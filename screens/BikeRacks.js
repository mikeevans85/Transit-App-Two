import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { ListView } from "react-native";
// import HomeStack from "../navigation/MainTabNavigator";
import { Badge, Button, Container, Header, Content, Icon, List, ListItem, Text } from "native-base";

export default class BikeRackScreen extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas
    };
  }
}
