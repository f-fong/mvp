const React = require('react');
const Tweet = require('./Tweet');

class Feed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: this.props.tweets,
      user: ''
    }

    this.onHomeClick = this.onHomeClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets: this.state.user === '' ? nextProps.tweets :
        nextProps.tweets.filter(item => item.user === this.state.user),
      user: this.state.user
    });
  }

  onUserClick(name, event) {
    event.preventDefault();
    this.setState({
      tweets: this.props.tweets.filter(item => item.user === name),
      user: name
    });
  }

  onHomeClick(event) {
    event.preventDefault();
    this.setState({
      tweets: this.props.tweets,
      user: ''
    });
  }

  render() {
    return (
      <div>
        <a href="#" onClick={this.onHomeClick}>Home</a> | {this.state.user || 'nobody'}'s feed
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
