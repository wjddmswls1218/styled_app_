import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || ""};

  display: flex;
  flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};

  background-color: ${(props) => props.bgColor || "#fff"};
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Wrapper width="100%" height="60px" bgColor="#333"></Wrapper>

        <Wrapper width="100%" height="600px" direction="row">
          <Wrapper width="10%" height1="100%" bgColor="#4b1a1a"></Wrapper>
          <Wrapper width="90%" height1="100%" bgColor="#853c3c"></Wrapper>
        </Wrapper>

        <Wrapper width="100%" height="400px" direction="row">
          <Wrapper width="50%" height="100%" bgColor="#143e50"></Wrapper>
          <Wrapper width="50%" height="100%" bgColor="#416271"></Wrapper>
        </Wrapper>

        <Wrapper width="100%" height="500px">
          <Wrapper width="100%" height="50%" bgColor="#292065">
            <Wrapper width="50%" height="100%" bgColor="#1c1645"></Wrapper>
          </Wrapper>
          <Wrapper width="100%" height="50%" bgColor="#1c1645">
            <Wrapper width="50%" height="100%" bgColor="#292065"></Wrapper>
          </Wrapper>
        </Wrapper>

        <Wrapper width="100%" height="700px" direction="row">
          <Wrapper width="30%" height="100%" bgColor="#7e16bf"></Wrapper>
          <Wrapper width="40%" height="100%" bgColor="#7324c2"></Wrapper>
          <Wrapper width="30%" height="100%" bgColor="#59209b"></Wrapper>
        </Wrapper>
      </Wrapper>
    );
  }
}

export default App;
