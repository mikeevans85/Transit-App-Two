import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { ListView } from 'react-native';
import TrainStopScreen from "../navigation/AppNavigator";
import { Location, Permissions } from "expo";
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
      latitude: '',
      longitude: ''
      // coords: ''
    };
  }
  componentDidMount() {
    this.getLocationAsync();
  }

   getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
 
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
      return;
    }
 
    const location = await Location.getCurrentPositionAsync({});

    this.setState({ 
      latitude: location.coords.latitude,
      longitude: location.coords.longitude
    });
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  render() {
    const {navigate} = this.props.navigation;
    console.log(this.state.latitude, this.state.longitude)
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
              onPress={() => this.props.navigation.navigate('TrainStop', { train: data, latitude: this.state.latitude })}>
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