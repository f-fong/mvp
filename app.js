// TODO

class Tweet extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div onClick={() => { console.log('test') }}>
				<a href="#" onClick={this.props.onUserClick}>
				@{this.props.message.user}
				</a>: {this.props.message.text}
			</div>
		)
	}
}

class Feed extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			tweets: this.props.tweets
		}
	}

	onUserClick(name) {
		console.log(name)
		this.setState({
			tweets: this.props.tweets.filter(item => item.user === name)
		})

	}

	render() {
		return (
		<body>
		{this.state.tweets.map((item, index) => <Tweet key={index} message={item} onUserClick={this.onUserClick.bind(this, item.user)} />)}
		</body>
		)
	}
}

ReactDOM.render(<Feed tweets={[{user:'felicia', text: 'testing'}, {user:'dan', text:'testing testing'}, {user:'felicia', text:'3rd message'}]} />, document.getElementById("app"));











