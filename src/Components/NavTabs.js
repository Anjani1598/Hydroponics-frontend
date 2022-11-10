import React from "react";
import Nav from "react-bootstrap/Nav";

import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

const NavTabs = () => {
  return (
    <>
      <div style={{ margin: "20px" }}>
        <Nav className="justify-content-center" activeKey="/home">
          <NavDropdown title="Hydroponics Systems" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1" href="/item">
              Linear Grow System
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">
              Verical Grow System
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Indoor Grow System
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Aquaponics Systems" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">
              <Button variant="primary">Logout</Button>
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default NavTabs;
