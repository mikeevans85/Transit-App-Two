import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body  } from "native-base";
import { StyleSheet, View } from "react-native";

export default class extends Component {
	constructor(props) {
    super(props);
    this.state = { isLoading: true };
  };

  render() {
    const name = this.props.navigation.getParam('train', true);
    const latitude = this.props.navigation.getParam('latitude', true);
    return (
    //   <View>
    //     <Text style={styles.titleText}>{name}</Text>
    //     <Text style={styles.baseText}>{latitude}</Text>
    //   </View>
    // );
    <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert("This is the #{name}")}>
              <Text style={styles.titleText}>{name}</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>
                  Click on any carditem
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
              <Text>GeekyAnts</Text>
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