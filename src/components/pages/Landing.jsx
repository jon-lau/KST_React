import React from 'react';
import { Grid, Item, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';
import { defaultNews } from '../../constants/constants'
import NewsItem from '../components/NewsItem';


/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className="kst-landing-background">
          <Grid textAlign='center' container>

            <Grid.Column width={8}>
              <Header as='h1'>{"Ka'ala Systems Technology Corporation"}</Header>
              <p>Native Hawaiian Owned - SBA 8(a) - SDVOSB - DBE Certified</p>
              <Header as='h2'>Providing Services Around the Globe</Header>
              <Header as='h2'>International and Domestic</Header>
              <Header as='h2'>
                Professional work including administrative,
                cable, storage, telecommunications, data
                centers and help desks
              </Header>
            </Grid.Column>

            <Grid.Column width={8}>
              <Header>Recent News</Header>
              <Item.Group>
                {defaultNews.slice(0, 3).map((newsItem, index) =>
                    <NewsItem key={index} newsItem={newsItem}/>)}
              </Item.Group>
              
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}


export default withRouter (Landing);
