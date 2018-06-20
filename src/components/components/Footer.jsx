import React from 'react';
import { Grid, List, Input } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { color: 'white' };
    return (
        <footer>
          <div style={divStyle} className="ui container"><Grid className="custom-footer">
            <Grid container columns={3} >
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
              <Grid.Column>
                CONNECT
                <hr/>
                <Input
                    action={{ color: 'black', content: 'Join' }}
                    labelPosition='right'
                    placeholder='Enter Email Address'
                />
              </Grid.Column>

            </Grid>
          </Grid></div>
        </footer>
    );
  }
}

export default Footer;
