import React from 'react';

async function callAPI(){
	const db_response = await fetch('/api');
	console.log(db_response);
	
	const db_json = await db_response.json();
	
	console.log("db:", db_json);
	return db_json;
}

export default function CitationsComponent() {
	
	callAPI();

	// TODO -> abstraction
	return (
		<section className="container sobre">
			<h1 className="text-center"> Sobre Programação</h1>
			<p>
				Este site exibe citações aletórias do campo da programação usando API Storm e Grimmstudios. Se você
				quiser, você pode tweetar as citações.
			</p>

			<div className="load text-center">
				<i className="fa fa-spinner fa-spin fa-3x" />
			</div>

			<blockquote className="container ">
				<div className=" well ">
					<q className="citacao-texto" />
				</div>
				<div>
					<div>
						<strong>&mdash;</strong> <span className="autor" />
					</div>
				</div>

				<div className="contentTraducao">
					<p>
						<span className="txtTraduzido" />
						&#8212;<span className="autorApi" />
					</p>
				</div>
			</blockquote>

			<select className="lang-select  pull-right">
				<option value="pt">Português</option>
				<option value="es">Espanhol</option>
				<option value="en">Inglês</option>
				<option value="fr">Francês</option>
			</select>

			<div className="wrapperBtns">
				<button className="btn btn-primary" type="button" id="btnCitacao" >
					<i className="fa fa-refresh  fa-4x" />
				</button>
				<a
					className="twitter-share-button"
					href="https://twitter.com/intent/tweet"
					data-size="large"
				>
					<button className="btn btn-primary " type="button" id="btTw">
						{' '}
						<i className="fa fa-twitter fa-4x" />{' '}
					</button>
				</a>
				<div>
					caracteres:<span id="numChars" />
				</div>
			</div>
		</section>
	);
}
