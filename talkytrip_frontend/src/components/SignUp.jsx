import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
  Input,
  Avatar,
  theme,
} from "@nextui-org/react";
import { useWindowSize } from "react-use";

import backImage from "../assets/backgrond.jpeg";
import { RiUser3Fill, RiMailFill, RiEyeFill } from "react-icons/ri";
import { primary } from "../../config/colors";


function Signup() {
  const { height } = useWindowSize();
  
  // const { value, reset, bindings } = useInput("");
  
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [passwordConfirm, setPasswordConfirm] = useState("");

  // const _onSignup = async (e) => {
  //   e.preventDefault();

  //   if (password !== passwordConfirm) {
  //     // handle this error in the UI to show user
  //     return;
  //   }

  //   const url = "http://localhost:1337/api/auth/local/register";
  //   const method = "POST";
  //   const body = JSON.stringify({
  //     username: username,
  //     email: email,
  //     password: password
  //   });
  //   const headers = new Headers({
  //     "content-type": "application/json",
  //     "accept": "application/json",
  //   });

  //   const response = await fetch(url, {
  //     method: method,
  //     body: body,
  //     headers: headers,
  //   });

  //   const data = await response.json();

  //   // navigate to dashboard
  //   console.log("user registered", data);
  // }

  return (
    <div>
    <Grid.Container style={styles.mainGrid} css={{ maxHeight: height }}>
      <Grid xs={12} sm={6}>
        <Container xs>
          <Spacer size={1} />
          <Row>
            <Text h1 css={{ color:"#73a85f"}}>
              {"TalktyTrip"}
            </Text>
          </Row>
          <Spacer y={1} />
          <form>
            <Row>
              <Text>{"But first, how can we call you?"}</Text>
            </Row>
            <Spacer y={0.5} />
            <Row>
              <Input
                bordered
                contentRight={<RiUser3Fill />}
                type="text"
                placeholder="Enter your name"
                fullWidth
                size="lg"
                />
            </Row>
            <Spacer y={1} />
            <Row>
              <Text>{"Enter your new sign in details"}</Text>
            </Row>
            <Spacer y={0.5} />
            <Row>
              <Input
                bordered
                contentRight={<RiMailFill />}
                type="email"
                placeholder="Enter your email"
                fullWidth
                size="lg"
                />
            </Row>
            <Spacer y={1} />
            <Row>
              <Input
                bordered
                contentRight={<RiEyeFill />}
                type="password"
                placeholder="Enter a secure password"
                fullWidth
                size="lg"
                />
            </Row>
            <Spacer y={1} />
            <Row>
              <Button
                type="submit"
                size="lg"
                auto
                shadow
              > 
                Signup
              </Button>
            </Row>
          </form>
        </Container>
      </Grid>
      <Grid xs={12} sm={6} css={{ maxHeight: height }}>
        <img src={backImage}
        width= "100%"
        />
      </Grid>
    </Grid.Container>
  </div>
);
}



const styles = {

};

export default Signup;
