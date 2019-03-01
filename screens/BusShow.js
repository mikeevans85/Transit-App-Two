import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body  } from "native-base";
import { StyleSheet, View } from "react-native";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  };

  render() {
    const name = this.props.navigation.getParam('bus', true);
    const location = this.props.navigation.getParam('location', true);
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

