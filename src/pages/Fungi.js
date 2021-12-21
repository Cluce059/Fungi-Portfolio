import React from "react";
import { gillsAndRidges, Polypores, Teeth, Others } from '../components';
import Jumbotron from "../components/Jumbotron";

function Fungi () {

    return (
        <Jumbotron className="jumbotron">
            <gillsAndRidges />
            <Polypores />
            <Teeth />
            <Others />
            </Jumbotron>
    );
}

export default Fungi;