import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../Assets/logoHero-150px.png";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar className="fixed-top" bg="dark" variant="dark">
          <Navbar.Brand href="#">
            <img src={logo} className="navLogo" alt="MedScan" width="80%" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Button variant="secondary" style={uploadButtonStyle}>
              Upload
            </Button>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

const uploadButtonStyle = {
  backgroundColor: "#67d891",
  color: "#262626",
  fontWeight: "600",
};

export default NavBar;
