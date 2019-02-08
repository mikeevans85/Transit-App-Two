import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
export default class CardItemBordered extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header bordered>
              <Text>Morgan St & 18th St</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Total Docks: 15 </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Dodge Ave & Mulford St</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Total Docks: 12</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <Text>Rainbow Beach</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>Total Docks: 9</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
