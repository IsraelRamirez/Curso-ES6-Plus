import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ClienteAxios from './config/axios'

import Pacientes from './Components/Pacientes'
import NuevaCita from './Components/NuevaCita'
import Cita from './Components/Cita'
import clienteAxios from './config/axios';

function App() {

	const [citas, guardarCitas] = useState([]);
	const [consultar, guardarConsultar] = useState(true)

	useEffect(()=>{
		if(consultar){
			const consultarAPI = ()=>{
				clienteAxios.get('/pacientes')
				.then(respuesta =>{
					guardarCitas(respuesta.data)
					guardarConsultar(false)
				})
				.catch(e=>{
					console.log(e);
				})
			}
			consultarAPI();
		}
	}, [consultar])


	return (
		<Router>
			<Switch>
				<Route 
				exact path="/"
				component={()=><Pacientes citas={citas} />}
				/>
				<Route 
				exact path="/nueva"
				component={()=> <NuevaCita guardarConsultar={guardarConsultar} />}
				/>
				<Route 
				exact path="/cita/:id"
				render={(props) =>{
					const cita = citas.filter(cita => cita._id === props.match.params.id)
					return(
						<Cita cita={cita[0]} guardarConsultar={guardarConsultar} />
					)
				}}
				/>
			</Switch>
		</Router>
	);
}

export default App;
