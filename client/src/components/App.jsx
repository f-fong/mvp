const React = require('react');
const Feed = require('./Feed');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      newTweet: { user: '', text: '' },
      tweets: [
        { user: 'felicia', text: 'testing' },
        { user: 'dan',     text: 'testing testing' },
        { user: 'felicia', text: '3rd message' }
      ]
    };

    this.onNewTextChange = this.onNewTextChange.bind(this);
    this.onNewUserChange = this.onNewUserChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
  }

  onNewTextChange(event) {
    this.setState({
      newTweet: {
        user: this.state.newTweet.user,
        text: event.target.value
      }
    });
  }

  onNewUserChange(event) {
  	this.setState({
  		newTweet: {
  			user: event.target.value,
  			text: this.state.newTweet.text
  		}
  	});
  }

  onClickButton(event) {
  	this.setState({
  		newTweet: { user: '', text: '' },
  		tweets: this.state.tweets.unshift(this.state.newTweet)
  	})
  }

  render() {
    return (
      <div>
        <input type="text" placeholder="Username" value={this.state.newTweet.user} onChange={this.onNewUserChange} />
        <input type="text" placeholder="Your tweet here!" value={this.state.newTweet.text} onChange={this.onNewTextChange} />
        <button onClick={this.onClickButton}>Submit</button>
        <div>
          <Feed tweets={this.state.tweets} username={this.state.username} />
        </div>
      </div>
    );
  }
}

module.exports = App;
