import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Header, Image } from 'semantic-ui-react';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
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
          <Menu.Item as={NavLink} activeClassName="" exact to="/Services">
            <Header inverted>
              Services
            </Header>
          </Menu.Item>
          <Menu.Item>
            <Header inverted>
              Customers
            </Header>
          </Menu.Item>
          <Menu.Item>
            <Header inverted>
              Contracts
            </Header>
          </Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/Jobs">
            <Header inverted>
              Careers
            </Header>
          </Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/News">
            <Header inverted>
              News
            </Header>
          </Menu.Item>
          <Menu.Item as={NavLink} activeClassName="" exact to="/Testimonials">
            <Header inverted>
              Testimonials
            </Header>
          </Menu.Item>
        </Menu>
    );
  }
}

export default withRouter(NavBar);
