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
  }

  onNewTextChange(event) {
    this.setState({
      newTweet: {
        user: this.state.newTweet.user,
        text: event.target.value
      }
    });
  }

  render() {
    return (
      <div>
        <input type="text" value="" />
        <input type="text" value={this.state.newTweet.text} onChange={this.onNewTextChange} />
        <button>Submit</button>
        <div>
          <Feed tweets={this.state.tweets} username={this.state.username} />
        </div>
      </div>
    );
  }
}

module.exports = App;
