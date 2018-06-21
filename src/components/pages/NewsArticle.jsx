import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { defaultNews } from '../../constants/newsArticles';

/** Renders the Page for editing a single document. */
class NewsArticle extends React.Component {
  
  render() {
    const url = this.props.match.params.url;
    const article = defaultNews.find(function(element) {return element.url === url});
    return (
      <div className="kst-landing-background">
      <Container>
        <Header as="h2" textAlign="center">{article.title}</Header>
        <hr/>
        {article.description.map((description, index) =>
            <p key={index} description={description}>{description}</p>)}
        <hr/>
      </Container>
    </div>
    );
  }
}


export default withRouter (NewsArticle);
