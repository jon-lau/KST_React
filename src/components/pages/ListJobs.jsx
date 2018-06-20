import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Jobs } from '/imports/api/jobs/jobs';
import JobItem from '/imports/ui/components/JobItem';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListJobs extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className="kst-landing-background">
          <Container>
            <Header as="h2" textAlign="center">Job Openings</Header>

            <Card.Group>
              {this.props.jobItems.map((jobItem, index) =>
                  <JobItem key={index} jobItem={jobItem}/>)}
            </Card.Group>

          </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListJobs.propTypes = {
  jobItems: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Jobs');
  return {
    jobItems: Jobs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListJobs);
