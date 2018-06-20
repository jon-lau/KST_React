import React from 'react';
import { Card, Message, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class JobItem extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Header as='h2'>
              {this.props.jobItem.title}
            </Header>
            <Card.Meta>
              <span>
                {this.props.jobItem.location}
              </span>
            </Card.Meta>
            <Header as='h4'>Job Summary</Header>
            <Card.Description>
              {this.props.jobItem.summary}
            </Card.Description>
            <Header as='h4'>Job Certifications</Header>
            <Message.List>
              {this.props.jobItem.certifications.map((certification, index) =>
                  <Message.Item key={index} certificaiton={certification}>{certification}</Message.Item>)}
            </Message.List>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
JobItem.propTypes = {
  jobItem: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(JobItem);
