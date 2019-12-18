import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const navBar = {
	height: '80px',
	display: 'flex',
	alignItems: 'center',
	background: 'orange'
}

function Navigation () {
	return (
		<div style={navBar}>
			<Container>
				<Row>
					<Col>
						<Nav>
							<Nav.Item>
								<Nav.Link>div for logo</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col>
						<Nav className="justify-content-end" activeKey="/home">
					    <Nav.Item>
					      <Nav.Link><Link to="/register">Register</Link></Nav.Link>
					    </Nav.Item>
					    <Nav.Item>
					      <Nav.Link><Link to="/login">Login</Link></Nav.Link>
					    </Nav.Item>
					    <Nav.Item>
					      <Nav.Link eventKey="link-2">Link</Nav.Link>
					    </Nav.Item>
					    <Nav.Item>
					      <Nav.Link eventKey="disabled" disabled>
					        Disabled
					      </Nav.Link>
					    </Nav.Item>
					  </Nav>
					 </Col>
				</Row>
			</Container>
		</div>
	);
}

export default Navigation;
