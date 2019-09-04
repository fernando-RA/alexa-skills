import React, { Component } from 'react';

class CitationsComponent extends Component {
	state = {
		response: ''
	};

	componentDidMount() {
		this.callApi()
			.then(res => this.setState({ response: res }))
			.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('http://localhost:9000/quote');
		const body = await response.json();

		if (response.status !== 200) throw Error(body.message);

		return body;
	};

	render() {
		const quoteText = this.state.response.quoteText;
		const numChars = quoteText === undefined ? 0 : Array.from(quoteText).lenght;
		console.log(numChars);
		
		return (
			<section className="container sobre">
				<h1 className="text-center"> Sobre Programação</h1>
				<p>
					Este site exibe citações aletórias <br /> Se você quiser, você pode tweetar as citações.
				</p>

				<div className="load text-center">
					<i className="fa fa-spinner fa-spin fa-3x" />
				</div>

				<blockquote className="container ">
					<div className=" well ">
						<q className="citacao-texto">{this.state.response.quoteText}</q>
					</div>
					<div>
						<div>
							<strong>&mdash;</strong>
							<span className="autor">{this.state.response.quoteAuthor}</span>
						</div>
					</div>

					{/* <div className="contentTraducao">
					<p>
						<span className="txtTraduzido" />
						&#8212;<span className="autorApi" />
					</p>
				</div> */}
				</blockquote>

				<select className="lang-select  pull-right">
					<option value="pt">Português</option>
					<option value="es">Espanhol</option>
					<option value="en">Inglês</option>
					<option value="fr">Francês</option>
				</select>

				<div className="wrapperBtns">
					<button className="btn btn-primary" type="button" id="btnCitacao">
						<i className="fa fa-refresh  fa-4x" />
					</button>
					<a className="twitter-share-button" href="https://twitter.com/intent/tweet" data-size="large">
						<button className="btn btn-primary " type="button" id="btTw">
							{' '}
							<i className="fa fa-twitter fa-4x" />{' '}
						</button>
					</a>
					<div>
						caracteres:<span id="numChars">{numChars}</span>
					</div>
				</div>
			</section>
		);
	}
}

export default CitationsComponent;
