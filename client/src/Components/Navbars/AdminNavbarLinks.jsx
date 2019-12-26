/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

import { logOut } from "services";

class AdminNavbarLinks extends Component {
  render() {
    return (
       <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
            <Nav.Link><Link to="/auth/login" onClick={logOut}>Log out</Link></Nav.Link>
          </Nav>
      </Navbar.Collapse>
    );
  }
}

export default AdminNavbarLinks;


// const notification = (
    //   <div>
    //     <i className="fa fa-globe" />
    //     <b className="caret" />
    //     <span className="notification">5</span>
    //     <p className="hidden-lg hidden-md">Notification</p>
    //   </div>
    // );
      //  <Navbar.Collapse id="responsive-navbar-nav">
      //   <Nav>
      //     <Nav.Item eventKey={1} href="#">
      //       <i className="fa fa-dashboard" />
      //       <p className="hidden-lg hidden-md">Dashboard</p>
      //     </Nav.Item>
      //     <NavDropdown
      //       eventKey={2}
      //       title={notification}
      //       noCaret
      //       id="basic-nav-dropdown"
      //     >
      //       <NavDropdown.Item eventKey={2.1}>Notification 1</NavDropdown.Item>
      //       <NavDropdown.Item eventKey={2.2}>Notification 2</NavDropdown.Item>
      //       <NavDropdown.Item eventKey={2.3}>Notification 3</NavDropdown.Item>
      //       <NavDropdown.Item eventKey={2.4}>Notification 4</NavDropdown.Item>
      //       <NavDropdown.Item eventKey={2.5}>Another notifications</NavDropdown.Item>
      //     </NavDropdown>
      //     <Nav.Item eventKey={3} href="#">
      //       <i className="fa fa-search" />
      //       <p className="hidden-lg hidden-md">Search</p>
      //     </Nav.Item>
      //   </Nav>
      //   <Nav className="nav navbar-nav navbar-right">
      //     <Nav.Item eventKey={1} href="#">
      //       Account
      //     </Nav.Item>
      //     <NavDropdown
      //       eventKey={2}
      //       title="Dropdown"
      //       id="basic-nav-dropdown-right"
      //     >
      //       <NavDropdown.Item eventKey={2.1}>Action</NavDropdown.Item>
      //       <NavDropdown.Item eventKey={2.2}>Another action</NavDropdown.Item>
      //       <NavDropdown.Item eventKey={2.3}>Something</NavDropdown.Item>
      //       <NavDropdown.Item eventKey={2.4}>Another action</NavDropdown.Item>
      //       <NavDropdown.Item eventKey={2.5}>Something</NavDropdown.Item>
      //       <NavDropdown.Item divider />
      //       <NavDropdown.Item eventKey={2.5}>Separated link</NavDropdown.Item>
      //     </NavDropdown>
      //     <Nav.Item eventKey={3} href="#">
      //       Log out
      //     </Nav.Item>
      //   </Nav>
      // </Navbar.Collapse>