/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Container,
  Nav,
  Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
// import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <Navbar
      style={{ background: '#71797E' }}
      collapseOnSelect
      expand="lg"
      bg="darkgrey"
      variant="dark"
    >
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>Faeruns Fantastical Managment</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>All Campaigns</Nav.Link>
            </Link>
            <Nav.Link href="https://picsart.com/ai-art-generator" target="_blank" rel="noopener noreferrer">
              Create Campaign
            </Nav.Link>
            <Link passHref href="/myCampaign/new">
              <Nav.Link>Add Campaign</Nav.Link>
            </Link>
            <Button style={{ background: 'green' }} variant="danger" onClick={signOut}>
              Sign Out
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
