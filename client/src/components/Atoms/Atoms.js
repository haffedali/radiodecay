import React, { Component } from 'react';
import Atom from "../Atom"
import "./Atoms.css"

class Atoms extends Component{

    state = {
        atoms: 0,
        finalAtom: 0,
        initAmount: 0
    }


    componentDidMount(){

    }

    render(){
            // let oranges = Math.floor(this.props.initAmount / 5)
            return(
                <div className="atoms-container">
                    <div className="atoms-row">
                        {Array(this.props.atoms).fill(<Atom quality="good"/>)};
                        {Array(this.props.orangeAtoms).fill(<Atom />)}
                    </div>
                </div>
                )
        }
}

export default Atoms;