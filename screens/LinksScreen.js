import React, { Component } from "react";
import { Container, Header, Content, Accordion } from "native-base";
const dataArray = [
  { title: "Bike", content: 35 },
  { title: "Bus", content: "Lorem ipsum dolor sit amet" },
  { title: "Train", content: "Lorem ipsum dolor sit amet" }
];
export default class AccordionHeaderContentStyleExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Accordion
            dataArray={dataArray}
            headerStyle={{ backgroundColor: "#b7daf8" }}
            contentStyle={{ backgroundColor: "#ddecf8" }}
          />
        </Content>
      </Container>
    );
  }
}
