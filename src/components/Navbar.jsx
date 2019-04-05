import React, { Component } from 'react';

class Navbar extends Component {

    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-light bg-light">
                    <h1 className="navbar-brand mb-0 h1">
                        Contadores existentes: {this.props.contadoresExistentes}
                    </h1>
                </nav>
                <br/>
                <nav className="navbar navbar-light bg-light">
                    <h1 className="navbar-brand mb-0 h1">
                        Contadores mayores a 0: {this.props.contadoresMayores}
                    </h1>
                </nav>
            </div>
         );
    }
}
 
export default Navbar;