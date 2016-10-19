class Feed extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			tweets: this.props.tweets
		}
	}

	onUserClick(name) {
		this.setState({
			tweets: this.props.tweets.filter(item => item.user === name)
		})

	}

	render() {
		return (
		<div>
		{this.state.tweets.map((tweet, index) => <Tweet key={index} message={tweet} onUserClick={this.onUserClick.bind(this, tweet.user)} />)}
		</div>
		)
	}
}