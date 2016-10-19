const React = require('react');
const Tweet = require('./Tweet');

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: this.props.tweets
    }

    this.onHomeClick = this.onHomeClick.bind(this);
  }

  onUserClick(name, event) {
    event.preventDefault();
    this.setState({
      tweets: this.props.tweets.filter(item => item.user === name)
    });
  }

  onHomeClick(event) {
    event.preventDefault();
    this.setState({ tweets: this.props.tweets });
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.onHomeClick}>Home</a>
        <div>
          {this.state.tweets.map((tweet, index) =>
            <Tweet
              key={index}
              message={tweet}
              onUserClick={this.onUserClick.bind(this, tweet.user)}
            />
          )}
        </div>
      </div>
    );
  }
}

module.exports = Feed;
