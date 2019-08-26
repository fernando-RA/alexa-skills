import React from 'react';

// import { Container } from './styles';

export default function Footer() {
	return (
		<footer className="text-primary">
			<p> Desenvolvido por : Fernando Aguilar </p>
			<p>
				<a href="mailto:fernando.aguilar@hotmail.com.br">
					<i className="fa fa-envelope fa-fw" alt="Email" />
				</a>
				<a href="https://github.com/fernand0aguilar" >
					<i className="fa fa-github fa-fw" alt ="github"/>
				</a>
				<a href="https://www.linkedin.com/in/fernando-ribeiro-aguilar-044029132" >
					<i className="fa fa-linkedin" alt="linkedin"/>
				</a>
			</p>
		</footer>
	);
}
