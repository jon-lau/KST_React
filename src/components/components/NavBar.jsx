import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Header, Image, Dropdown } from 'semantic-ui-react';


/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {

  handleClick = () => {
      this.props.history.push('/ContactUs');
  };

  handleClick1 = () => {
      this.props.history.push('/ContractList');
  };
  render() {
    const menuStyle = { marginBottom: '0px' };
    return (
        <Menu style={menuStyle} attached="top" borderless inverted stackable>
          <Menu.Item as={NavLink} activeClassName="" exact to="/">
            <Image
                src="/images/KSTLogo.png"
                size="mini"
                alt=""
            />
            <Header inverted>
              KST Hawaii
            </Header>
          </Menu.Item>
          <Menu.Item position="right" as={NavLink} activeClassName="" exact to="/AboutUs">
            <Header inverted>
              About Us
            </Header>
          </Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/News">
            <Header inverted>
              News
            </Header>
          </Menu.Item>
          <Dropdown className = "navheader" simple item text='Contracts'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} activeClassName="" exact to="/ContractList">Contract Lists</Dropdown.Item>
              <Dropdown.Item as={NavLink} activeClassName="" exact to="/ContractInfo">Contract Info</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item as={NavLink} activeClassName="" exact to="/Customers">
            <Header inverted>
              Customers
            </Header>
          </Menu.Item>
          <Dropdown className = "navheader" simple item text='Careers'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} activeClassName="" exact to="/Careers">Benefits</Dropdown.Item>
              <Dropdown.Item as={NavLink} activeClassName="" exact to="/Jobs">Job Listings</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item as={NavLink} activeClassName="" exact to="/ContactUs">
            <Header inverted>
              Contact Us
            </Header>
          </Menu.Item>
          <Dropdown className = "navheader" simple item text='Service'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} activeClassName="" exact to="/Services">NAICS Codes</Dropdown.Item>
              <Dropdown.Item as={NavLink} activeClassName="" exact to="/ServiceInfo">Credentials and Downloadable Files</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item as={NavLink} activeClassName="" exact to="/Testimonials">
            <Header inverted>
              Testimonials
            </Header>
          </Menu.Item>
          <Dropdown simple item text='Categories'>
      <Dropdown.Menu>
        <Dropdown.Item as={NavLink} activeClassName="" exact to="/ContractList">Past/Existing Contracts</Dropdown.Item>
        <Dropdown.Item as={NavLink} activeClassName="" exact to="/ContractInfo">Contract Info</Dropdown.Item>
        <Dropdown.Item as={NavLink} activeClassName="" exact to="/Careers">Careers</Dropdown.Item>
        <Dropdown.Item>Home</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Menu>
    );
  }
}

export default withRouter(NavBar);
