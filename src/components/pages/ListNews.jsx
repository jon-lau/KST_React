import React from 'react';
import { Container, Item, Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { defaultNews } from '../../constants/newsArticles';
import NewsItem from '../components/NewsItem';

class ListNews extends React.Component {
  render() {
    return (
      <div className="kst-landing-background">
        <Container centered>
          <section class="mainboxHome">
          <section class="newsheader">
            <h1> News and Announcements </h1>
          </section>
          <Container centered>
            <hr />
            <Item.Group centered>
              {defaultNews.map((newsItem, index) =>
                <NewsItem key={index} newsItem={newsItem} />)}
            </Item.Group>
            <hr />
          </Container>
          </section>
        </Container>
      </div>
    );
  }
}


export default withRouter(ListNews);
