const React = require('react');
const Feed = require('./Feed');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      tweets: [
        { user: 'felicia', text: 'testing' },
        { user: 'dan',     text: 'testing testing' },
        { user: 'felicia', text: '3rd message' }
      ]
    };
  }

  render() {
    return (
      <div>
        <input type="text" value="Username" />
        <input type="text" value="Type Here" />
        <button>Submit</button>
        <div>
          <Feed tweets={this.state.tweets} username={this.state.username} />
        </div>
      </div>
    );
  }
}

module.exports = App;
