import React, { Fragment } from 'react';
import {Link, withRouter} from 'react-router-dom'
import clienteAxios from '../config/axios'
import Swal from 'sweetalert2'


const Cita = (props) => {
    if(!props.cita){
        props.history.push('/')
        return null
    }
    
    const {cita} = props
    
    const eliminarCita = (e, id) =>{
        e.preventDefault()
        Swal.fire({
            title: '¿Estás seguro que deseas eliminar la cita?',
            text: "Estos cambios no podrán deshacerse",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, elimina la cita',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Eliminada!',
                    'La cita ha sido eliminada.',
                    'success'
                )
                
                clienteAxios.delete(`/pacientes/${id}`)
                    .then(()=>{
                        props.guardarConsultar(true)
                        props.history.push('/')
                    })
                    .catch(e=>{console.log(e)})
            }
        })
    }

    return ( 
        <Fragment>
            <h1 className="my-5">Nombre cita: {cita.nombre}</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={"/"} className="btn btn-success text-uppercas py-2 px-5 font-weight-bold">Volver</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <div className="p-5 list-group-item list-group-item-action flex-column align-items-center" >
                                <div className="d-flexw w-100 justify-content-between mb-4">
                                    <h3 className="mb-3">{cita.nombre}</h3>
                                    <small className="fecha-alta">
                                        {cita.fecha} - {cita.hora}
                                    </small>
                                </div>
                                <div className="mb-0">
                                    {cita.sintomas}
                                </div>
                                <div className="contacto py-3">
                                    <p>Dueño: {cita.propietario}</p>
                                    <p>Teléfono: {cita.telefono}</p>
                                </div>
                                <div className="d-flex">
                                    <button type="button" className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col" onClick={(e)=> eliminarCita(e,cita._id)}> Eliminar &times; </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default withRouter(Cita);