import React from 'react';
import ReactDOM from 'react-dom/client';

function App({ saludo, name }) {
	return (
		<h1>
			{saludo}, {name}!
		</h1>
	);
}
// 1- setup HOC // Componente WithSalud // Nuestra HOC
function withSaludo(saludo) {
	return function WrappedComponentWithSaludo(WrappedComponent) {
		return function ComponenteDeVerdad(props) {
			// El ultimo return tiene o tiene que ser un componente de React
			return (
				<>
					<WrappedComponent {...props} saludo={saludo} />
					<p>Estamos acompañando al WrappedComponent</p>
				</>
			);
		};
	};
}

// Instances HOC and  - Donde vamos a conectar el HOC  - feature
// primer paréntesis, primera función
// segundo paréntesis segunda función
const AppWithSaludo = withSaludo('Hola')(App);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AppWithSaludo name={'Julian'} />,
	</React.StrictMode>
);
