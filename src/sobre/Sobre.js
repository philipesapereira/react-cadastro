import React from 'react';
import { Link } from 'react-router-dom';

export default function Sobre ({ match }) {
    return (
        <>
        <h1>sobre</h1>
        <Link to="/">Home</Link>
        <p>{ match.params.id }</p>
        </>
    );
}