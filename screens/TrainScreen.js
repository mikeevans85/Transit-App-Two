import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { ListView } from 'react-native';
import TrainStopScreen from "../navigation/AppNavigator";
import { Badge, Button, Container, Header, Content, Icon, List, ListItem, Text } from 'native-base';

const datas = [
'Red Line',
'Blue Line',
'Green Line',
'Brown Line',
'Orange Line',
'Yellow Line',
'Purple Line',
'Pink Line',
];

const colors = [
'red',
'blue',
'green',
'brown',
'orange',
'yellow',
'purple',
'pink',
]

export default class TrainScreen extends Component {
    constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const {navigate} = this.props.navigation;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Header />
        <Content>
            <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem
              onPress={() => this.props.navigation.navigate('TrainStopScreen')}>
                <Text> {data} </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => alert('Favorited!')}>
                <Icon active name="star" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
          />
        </Content>
      </Container>
    );
  }
}