const $ = require('jquery');
const React = require('react');
const Feed = require('./Feed');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      newTweet: { user: '', text: '' },
      tweets: []
    };

    this.onNewTextChange = this.onNewTextChange.bind(this);
    this.onNewUserChange = this.onNewUserChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
  }

  componentDidMount() {
    $.ajax({
      type: "GET",
      url: 'http://localhost:3000/api/tweets',
      success: data => {
        this.setState({
          tweets: data
        })
      }
    });
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
    $.ajax({
      url : "/api/tweets",
      type: "POST",
      data: JSON.stringify(this.state.newTweet),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: () => {
        // Put your code to refresh the tweets here.
      }
    });
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
