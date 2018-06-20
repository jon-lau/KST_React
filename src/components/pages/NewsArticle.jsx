import React from 'react';
import { Container, Loader, Header, Message } from 'semantic-ui-react';
import { News } from '/imports/api/news/news';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders the Page for editing a single document. */
class NewsArticle extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <div className="kst-landing-background">
          <Container>
            <Header as="h2" textAlign="center">{this.props.doc.title}</Header>
            <hr/>
            {this.props.doc.description.map((description, index) =>
                <p key={index} description={description}>{description}</p>)}
            <hr/>
          </Container>
        </div>
    );
  }
}

/** Require the presence of a Stuff document in the props object. Uniforms adds 'model' to the props, which we use. */
NewsArticle.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  const documentId = match.params._id;
  const subscription = Meteor.subscribe('News');
  return {
    doc: News.findOne(documentId),
    ready: subscription.ready(),
  };
})(NewsArticle);
