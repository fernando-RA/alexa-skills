import React from 'react';

export default function CitationsComponent() {
	return (
		<section class="container sobre">
			<h1 class="text-center"> Sobre Programação</h1>
			<p>
				Este site exibe citações aletórias do campo da programação usando API Storm e Grimmstudios. Se você
				quiser, você pode tweetar as citações.
			</p>

			<div class="load text-center">
				<i class="fa fa-spinner fa-spin fa-3x" style="color:red" />
			</div>
			<blockquote class="container ">
				<div class=" well ">
					<q class="citacao-texto" />
				</div>
				<div style="color:white">
					<div>
						<strong>&mdash;</strong> <span class="autor" />
					</div>
				</div>

				<div class="contentTraducao">
					<p>
						<spam class="txtTraduzido" />
						&#8212;<spam class="autorApi" />
					</p>
				</div>
			</blockquote>
			<select class="lang-select  pull-right">
				<option value="pt">Português</option>
				<option value="es">Espanhol</option>
				<option value="en">Inglês</option>
				<option value="fr">Francês</option>
			</select>

			<div class="wrapperBtns ">
				<a>
					<button class="btn btn-primary  " type="button" id="btnCitacao" style="">
						<i class="fa fa-refresh  fa-4x" />
					</button>
				</a>
				<a
					class="twitter-share-button"
					href="https://twitter.com/intent/tweet"
					data-size="large"
					target="_blank"
				>
					<button class="btn btn-primary " type="button" id="btTw">
						{' '}
						<i class="fa fa-twitter fa-4x" />{' '}
					</button>
				</a>
				<div>
					caracteres:<spam id="numChars" />
				</div>
			</div>
		</section>
	);
}
