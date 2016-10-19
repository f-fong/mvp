class Tweet extends React.Component {

	constructor(props) {
		super(props);
	}


	render() {
		return (
			<div>
				<a href="#" onClick={this.props.onUserClick}>
				@{this.props.message.user}
				</a>: {this.props.message.text}
			</div>
		)
	}
}