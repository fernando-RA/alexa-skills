import React from 'react';

// import { Container } from './styles';

export default function Footer() {
	return (
		<footer class="text-primary">
			<p> Desenvolvido por : Eluan Dias </p>
			<p>
				<a href="mailto:eluan.dias@hotmail.com" target="_blank">
					<i class="fa fa-envelope fa-fw" />
				</a>
				<a href="https://github.com/eluanDias" target="_blank">
					<i class="fa fa-github fa-fw" />
				</a>
				<a href="https://br.linkedin.com/in/eluan" target="_blank">
					<i class="fa fa-linkedin" />
				</a>
				<a href="http://codepen.io/eluan" target="_blank">
					<i class="fa fa-codepen" />
				</a>

				<a href="https://www.freecodecamp.com/eluanssd" target="_blank">
					(<i class="fa fa-fire fa-fw" />)
				</a>
			</p>
		</footer>
	);
}
