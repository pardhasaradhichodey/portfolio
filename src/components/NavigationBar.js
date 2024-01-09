import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse, NavbarBrand } from 'reactstrap'; // Import NavbarBrand from 'reactstrap'
import './navigationbar.css';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className='navbar' expand="md" fixed='top'>
        <NavbarBrand href="/" className="mr-auto">Pardha Saradhi Chodey</NavbarBrand> {/* Added NavbarBrand */}
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="portfolio/" end activeClassName="active" tag={RRNavLink}>Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="portfolio/about" end activeClassName="active" tag={RRNavLink}>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="portfolio/projects" end activeClassName="active" tag={RRNavLink}>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="portfolio/experience" end activeClassName="active" tag={RRNavLink}>Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="portfolio/contact" end activeClassName="active" tag={RRNavLink}>Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
