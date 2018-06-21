import React from 'react';
import { Item, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link, NavLink } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class NewsItem extends React.Component {
  render() {
    return (
        <Item>
          <Item.Image size='tiny' src={this.props.newsItem.image}/>
          <Item.Content>
            <Header as={NavLink} activeClassName="" exact to={`/newsarticle/${this.props.newsItem._id}`}>
              {this.props.newsItem.title}
            </Header>
            <Item.Description>
              {this.props.newsItem.summary}
            </Item.Description>
            <Link style={{ color: 'blue' }} to={`/newsarticle/${this.props.newsItem._id}`}>Read More</Link>
          </Item.Content>
        </Item>
    );
  }
}

/** Require a document to be passed to this component. */
NewsItem.propTypes = {
  newsItem: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(NewsItem);
