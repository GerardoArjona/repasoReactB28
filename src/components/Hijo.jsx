import React, { Component } from 'react';

class Hijo extends Component { //Este es un contador

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    }

    getBadgeClass(){
        let badgeClass = "badge badge-";
        badgeClass += (this.props.counter.value === 0) 
            ? "danger"
            : "warning";
        return badgeClass;
    }

    getFormatCount(){
        const { value } = this.props.counter;
        return this.props.counter.value === 0 ? <h1>Zero</h1> : value
    }

    render() { 

        let badgeClass = this.getBadgeClass();

        return ( 
            <React.Fragment>
                {this.props.children}
                <span
                    style={this.styles}
                    className={badgeClass}
                > {this.getFormatCount()} </span>
                <button
                    style={this.styles}
                    className="btn btn-lg btn-primary"
                    onClick = {
                        () => {
                            this.props.onIncrement(this.props.counter)
                        }
                    }
                >Incrementa</button>
                <button
                    style={this.styles}
                    className="btn btn-lg btn-danger"
                    onClick = {
                        () => {
                            this.props.onDelete(this.props.counter.id)
                        }
                    }
                >Delete</button>
            </React.Fragment>
         );
    }
}
 
export default Hijo;