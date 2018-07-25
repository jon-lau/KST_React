import React from 'react';
import { Item, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link, NavLink } from 'react-router-dom';

class NewsItem extends React.Component {
  render() {
    return (
      <article class="newspost">
        <section class="newspostheader">
          <Link as={NavLink} activeClassName="" exact to={`/newsarticle/${this.props.newsItem.url}`}><h1>
          {this.props.newsItem.title+" "}
            </h1></Link>
          <p>{this.props.newsItem.date}</p>
        </section>
        <section class="newspostcontent">
          <Link as={NavLink} activeClassName="" exact to={`/newsarticle/${this.props.newsItem.url}`}><p><img src={this.props.newsItem.images[0]} alt="COMPAC ICON"></img></p></Link>
          <section>
            <p>
              {this.props.newsItem.summary}
            </p>
            <br></br>
            <Link as={NavLink} activeClassName="" exact to={`/newsarticle/${this.props.newsItem.url}`}>Read More</Link>
          </section>
        </section>
      </article>
      //   <Item>
      //   <Item.Image size='tiny' src={this.props.newsItem.image}/>
      //   <Item.Content>
      //     <Header as={NavLink} activeClassName="" exact to={`/newsarticle/${this.props.newsItem.url}`}>
      //       {this.props.newsItem.title}
      //     </Header>
      //     <Item.Description>
      //       {this.props.newsItem.summary}
      //     </Item.Description>
      //     <Link style={{ color: 'blue' }} to={`/newsarticle/${this.props.newsItem.url}`}>Read More</Link>
      //   </Item.Content>
      // </Item>
    );
  }
}

/** Require a document to be passed to this component. */
NewsItem.propTypes = {
  newsItem: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(NewsItem);
