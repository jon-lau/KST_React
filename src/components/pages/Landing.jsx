import React from 'react';
import { Grid, Item, Header } from 'semantic-ui-react';
import { News } from '/imports/api/news/news';
import PropTypes from 'prop-types';
import NewsItem from '/imports/ui/components/NewsItem';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';


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
                {this.props.newsItems.slice(0, 3).map((newsItem, index) =>
                    <NewsItem key={index} newsItem={newsItem}/>)}
              </Item.Group>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Landing.propTypes = {
  newsItems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('News');
  return {
    newsItems: News.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Landing);
