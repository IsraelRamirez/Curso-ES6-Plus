import React, { Fragment, useState} from 'react';
import calcularTotal from '../Helpers';
const Form = (props) => {
    const {cantidad, guardarCantidad, plazo, guardarPlazo,  guardarTotal, guardarCargando} = props

    const [error, guardarError] = useState(false);

    const calcularPrestamo = e=>{
        e.preventDefault();
        guardarError(false)
        
        if(cantidad > 0 && plazo > 0){
            guardarCargando(true)
            setTimeout(()=>{
                guardarCargando(false)
                guardarTotal(calcularTotal(cantidad, plazo))
            },3000)
            
        }
        else{
            guardarError(true)
        }
    }
    return ( 
    <Fragment>
        <form onSubmit={calcularPrestamo}>
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000" 
                        onChange={ e=>{guardarCantidad(parseInt(e.target.value))} }
                    />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select className="u-full-width" onChange={e=>guardarPlazo(parseInt(e.target.value))} >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Calcular" 
                        className="button-primary u-full-width" 
                     />
                </div>
            </div>
        </form>
        {(error) ? <p className="error">Todos los campos son obligatorios...</p> : null}
        
    </Fragment>
    );
}
 
export default Form;