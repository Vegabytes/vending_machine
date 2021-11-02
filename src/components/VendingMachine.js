import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

class Vendingmachine extends Component {
    render() {
        return (
            <div
                className='VendingMachine'
                style={{ backgroundImage: `url(${vendingMachineImg})` }}
            >
                <h1>hello i am a vending machine. what would you like yo eat?</h1>
                <Link to="/soda">Soda</Link>
                <Link to="/sardines"></Link>
                <Link to="/chips">SardinesChips</Link>
            </div>
        );
    }
}

export default Vendingmachine;
