import React from 'react';
import { Grid, List, Input, Container } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { color: 'white', marginTop: '-5px', paddingTop: '-5px' };
    return (
        <footer>
          <Container>
          <div style={divStyle}><Grid className="custom-footer">
            <Grid columns={3} >
              <Grid.Column>
                Corporate Headquarters
                <hr/>
                <List>
                  <List.Item>Ka’ala Systems Technology Corporation</List.Item>
                  <List.Item>98-025 Hekaha St.</List.Item>
                  <List.Item>Bldg. 2, Suite 224A</List.Item>
                  <List.Item>Aiea, Hawaii 96701-4904</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                Contact Us
                <hr/>
                <List>
                  <List.Item>Office: 808.521.7000</List.Item>
                  <List.Item>Fax: 808.521.7003 </List.Item>
                  <List.Item>Email: KST@ksthawaii.com</List.Item>
                </List>
              </Grid.Column>
            </Grid>
          </Grid></div>
          </Container>
        </footer>
    );
  }
}

export default Footer;
