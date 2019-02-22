import React, { Component } from "react";
import { ListView, AppRegistry, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Badge, Button, Container, Header, Content, Icon, List, ListItem, Right } from "native-base";
import FavoritesScreen from "../screens/FavoritesScreen";

const datas = [
  "1Bronzeville/Union Station",
  "2Hyde Park Express",
  "3King Drive",
  "4Cottage Grove",
  "N4Cottage Grove (Owl)",
  "N5South Shore Night Bus",
  "6Jackson Park Express",
  "7Harrison",
  "8Halsted",
  "8ASouth Halsted",
  "9Ashland",
  "X9Ashland Express",
  "N9Ashland (Owl)",
  "10Museum of Science and Industry",
  "11Lincoln",
  "12Roosevelt",
  "J14Jeffery Jump",
  "15Jeffery Local",
  "1816th/18th",
  "19United Center Express",
  "20Madison",
  "N20Madison (Owl)",
  "21Cermak",
  "22Clark",
  "N22Clark (Owl)",
  "24Wentworth",
  "26South Shore Express",
  "28Stony Island",
  "29State",
  "30South Chicago",
  "3131st",
  "34South Michigan",
  "N34South Michigan (Owl)",
  "3531st/35th",
  "36Broadway",
  "37Sedgwick",
  "39Pershing",
  "4343rd",
  "44Wallace/Racine",
  "4747th",
  "48South Damen",
  "49Western",
  "X49Western Express",
  "49BNorth Western",
  "N49Western (Owl)",
  "50Damen",
  "5151st",
  "52Kedzie/California",
  "52ASouth Kedzie",
  "53Pulaski",
  "N53Pulaski (Owl)",
  "53ASouth Pulaski",
  "54Cicero",
  "54ANorth Cicero/Skokie Blvd",
  "54BSouth Cicero",
  "55Garfield",
  "55A55th/Austin",
  "55N55th/Narragansett",
  "N55Garfield (Owl)",
  "56Milwaukee",
  "57Laramie",
  "5959th/61st",
  "60Blue Island/26th",
  "N60Blue Island/26th (Owl)",
  "62Archer",
  "62HArcher/Harlem",
  "N62Archer (Owl)",
  "6363rd",
  "N6363rd (Owl)",
  "63WWest 63rd",
  "65Grand",
  "66Chicago",
  "N66Chicago (Owl)",
  "6767th/69th/71st",
  "68Northwest Highway",
  "70Division",
  "7171st/South Shore",
  "72North",
  "73Armitage",
  "74Fullerton",
  "7574th/75th",
  "76Diversey",
  "77Belmont",
  "N77Belmont (Owl)",
  "78Montrose",
  "7979th",
  "N7979th (Owl)",
  "80Irving Park",
  "81Lawrence",
  "81WWest Lawrence",
  "N81Lawrence (Owl)",
  "82Kimball/Homan",
  "84Peterson",
  "85Central",
  "85ANorth Central",
  "86Narragansett/Ridgeland",
  "8787th",
  "N8787th (Owl)",
  "88Higgins",
  "90Harlem",
  "91Austin",
  "92Foster",
  "93California/Dodge",
  "94South California",
  "9595th",
  "96Lunt",
  "97Skokie",
  "X98Avon Express",
  "100Jeffery Manor Express",
  "103West 103rd",
  "106East 103rd",
  "108Halsted/95th",
  "111111th/King Drive",
  "111APullman Shuttle",
  "112Vincennes/111th",
  "115Pullman/115th",
  "119Michigan/119th",
  "120Ogilvie/Streeterville Express",
  "121Union/Streeterville Express",
  "124Navy Pier",
  "125Water Tower Express",
  "126Jackson",
  "128Soldier Field Express",
  "130Museum Campus",
  "134Stockton/LaSalle Express",
  "135Clarendon/LaSalle Express",
  "136Sheridan/LaSalle Express",
  "143Stockton/Michigan Express",
  "146Inner Drive/Michigan Express",
  "147Outer Drive Express",
  "148Clarendon/Michigan Express",
  "151Sheridan",
  "152Addison",
  "155Devon",
  "156LaSalle",
  "157Streeterville/Taylor",
  "165West 65th",
  "16969th/UPS Express",
  "171U of Chicago/Hyde Park",
  "172U of Chicago/Kenwood",
  "192U of Chicago HospitalsExpress",
  "201Central/Ridge",
  "206Evanston Circulator",
  "Former Routes[edit]",
  "Route Name",
  "X3King Drive Express",
  "X4Cottage Grove Express",
  "5Jeffery Local",
  "5BYates/Colfax",
  "6Van Buren",
  "6Garfield",
  "6BYates/Colfax",
  "7AHarrison/Adams",
  "10Lincoln/Larrabee",
  "10Lunch Loop",
  "13Elston",
  "13Southwest Skokie",
  "1414th Street",
  "14Devon/Cicero",
  "15Canal/Wacker",
  "15Canal/Wacker",
  "16Lake",
  "17Westchester",
  "19Devon/Northwest Express",
  "X20Washington/Madison Express",
  "21AFulton/21st Street",
  "21BWest Cermak",
  "23Morgan/Racine",
  "23Washington Express",
  "24Windsor Park",
  "25West Cermak",
  "2626th",
  "27South Deering",
  "X28Stony Island Express",
  "32Hammond",
  "32West 31st",
  "33Magnificent Mile Express",
  "36ADevon",
  "36AState",
  "37AWebster/Racine",
  "38Lincoln/Rosehill",
  "38Indiana",
  "38Michigan Express",
  "38Ogden/Taylor",
  "40Chinatown/Pilsen Shuttle",
  "40Planetarium",
  "40O'Hare Express",
  "41Elston/Clybourn",
  "42Halsted/Archer",
  "45Ashland/Archer",
  "46Southport",
  "47AWest 47th",
  "49ASouth Western",
  "50ASouth Damen",
  "53ALSouth Pulaski Limited",
  "X54Cicero Express",
  "55Elston",
  "X55Garfield Express",
  "56ANorth Milwaukee",
  "58Ogden",
  "58AOgden Extension",
  "61Montrose Beach",
  "61Archer/Franklin Express",
  "X62Archer Express",
  "64Argo",
  "64Foster/Lawrence",
  "64Foster/Canfield",
  "69Cumberland/East River",
  "X80Irving Park Express",
  "8383rd",
  "89Yates/95th",
  "89North Kedzie",
  "90NNorth Harlem",
  "92AWest Foster",
  "92WWest Foster",
  "9393rd",
  "95E93rd/95th",
  "95WWest 95th",
  "98Roscoe",
  "98Ogden Extension",
  "99Stevenson Express",
  "99MStevenson Express",
  "X99Chicago Manufacturing Campus Express",
  "104Pullman",
  "110Marquette",
  "119Vincennes/119th",
  "122Illinois Center/North Western Express",
  "123Illinois Center/Union Express",
  "127Jackson/Independence",
  "127Madison/Roosevelt Circulator",
  "128Wacker/Orleans",
  "129West Loop/South Loop",
  "131Washington",
  "132Goose Island Express",
  "134Diversey",
  "136Douglas",
  "142Union Depot/Shopping District",
  "144Marine/Michigan Express",
  "145Wilson/Michigan Express",
  "148Monroe Parking Lot",
  "149Michigan State/Wacker",
  "N151Sheridan (Owl)",
  "153Wilson/Michigan",
  "154Lunt",
  "154Wrigley Field Express",
  "155AWest Devon",
  "158Wacker/North Western Station",
  "162Pulaski/Stevenson Express",
  "164Narragansett Express",
  "168UIC/Pilsen Express",
  "170U of Chicago/Midway",
  "173U of Chicago/LakeviewExpress",
  "174U of Chicago/Garfield Stations",
  "200Main Shuttle",
  "N201Central/Sherman Night Bus",
  "202Main/Emerson",
  "203Ridge/Grant",
  "204Dodge",
  "205Chicago/Golf"
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});

AppRegistry.registerComponent("App", () => App);

export default class TrainScreen extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Header />
        <Content>
          <List
            leftOpenValue={75}
            rightOpenValue={-75}
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data => (
              <ListItem>
                <Text> {data} </Text>
                <Button transparent>
                  <Icon name="star" type="Ionicons" />
                </Button>
              </ListItem>
            )}
            renderLeftHiddenRow={data => (
              <Button full onPress={() => alert("Favorited!")}>
                <Icon active name="star" />
              </Button>
            )}
            renderRightHiddenRow={(data, secId, rowId, rowMap) => (
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>
            )}
          />
        </Content>
      </Container>
    );
  }
}
