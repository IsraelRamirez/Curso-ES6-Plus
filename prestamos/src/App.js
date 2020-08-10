import React, {Fragment, useState} from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Prestamo from './components/Prestamo'
import Mensaje from './components/Mensaje';
import Spinner from './components/Spinner';
function App() {
	const [cantidad, guardarCantidad] = useState(0)
	const [plazo, guardarPlazo] = useState(0)
	const [total, guardarTotal] = useState(0)
	const [cargando, guardarCargando] = useState(false)
	
	let component
	if(cargando)
		component = <Spinner/>
	else if(total === 0)
		component = <Mensaje/>
	else{
		component = <Prestamo
			cantidad = {cantidad}
			plazo = {plazo}
			total = {total}
		/>
	}
	return (
		<Fragment>
		<Header 
			titulo = "Cotizador de Prestamos"
		/>
		<div className="container">        
			<Form 
			cantidad = {cantidad}
			guardarCantidad = {guardarCantidad}
			plazo = {plazo}
			guardarPlazo = {guardarPlazo}
			total = {total}
			guardarTotal = {guardarTotal}
			guardarCargando = {guardarCargando}
			/>
			<div className="mensajes"> 
				{component}
			</div>
		</div>
		</Fragment>
	);
}


export default App;
