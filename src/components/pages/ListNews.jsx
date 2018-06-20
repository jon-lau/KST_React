import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Item, Header, Loader } from 'semantic-ui-react';
import { News } from '/imports/api/news/news';
import NewsItem from '/imports/ui/components/NewsItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListNews extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="kst-landing-background">
          <Container>
            <Header as="h2" textAlign="center">News and Announcements</Header>
            <hr/>
            <Item.Group>
              {this.props.newsItems.map((newsItem, index) =>
                  <NewsItem key={index} newsItem={newsItem}/>)}
            </Item.Group>
            <hr/>
          </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListNews.propTypes = {
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
})(ListNews);
