import React, { Fragment } from 'react';
function Prestamo(props){
    const {cantidad, total, plazo} = props

    return (
        <Fragment>
            <div className="u-full-width resultado">
                <h2>Resumen</h2>
                <p>La cantidad solicitada es: ${cantidad}</p>    
                <p>A pagar en: {plazo} Meses</p>
                <p>Pago mensual: ${(total/plazo).toFixed(2)}</p>
                <p>Total a pagar: ${total.toFixed(2)}</p>
            </div>        
        </Fragment>
    )
}
export default Prestamo