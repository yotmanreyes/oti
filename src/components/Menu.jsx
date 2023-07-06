import React from 'react';

function Menu(){
    return (
        <div className='menu'>
            <ul className='nav-items'>
                <li><a className='nav-items__link' href="#">Nosotros</a></li>
                <li><a className='nav-items__link' href="#">Servicios</a></li>
                <li><a className='nav-items__link' href="#">Proyectos</a></li>
                <li><a className='nav-items__link' href="#">Clientes</a></li>
                <li><a className='nav-items__link' href="#">Contacto</a></li>
                <li><a className='nav-items__link call-to-action' id='WorkWithUs' href="#">¡Cotiza Ya!</a></li>
            </ul>
        </div>
    );
}

export default Menu;