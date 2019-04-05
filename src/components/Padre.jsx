import React, { Component } from 'react';

import Hijo from "./Hijo";

class Padre extends Component {
    render() { 
        return ( 
            <div>
                {this.props.counters.map( counter => 
                    <Hijo
                        key = { counter.id }
                        counter= { counter }
                        onIncrement = { this.props.onIncrement }
                        onDelete = { this.props.onDelete }
                    >
                        <h4> Este es el contador numero {counter.id} </h4>
                    </Hijo>    
                )}
                <button
                    onClick={ this.props.onReset }
                    className="btn btn-lg btn-success"
                > Reset </button>
            </div>
         );
    }
}
 
export default Padre;