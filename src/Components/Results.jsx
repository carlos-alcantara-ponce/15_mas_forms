import React from 'react';


const Results = props => {

    const { firstName, lastName, email, password, password2 } = props.datosRes;

    return (
        <div>
            <p>Your form data</p>
            <p>First name: {firstName} </p>
            <p>Last name: {lastName}</p>
            <p>Email: {email} </p>
            <p>Password: {password} </p>
            <p>Confirm Password: {password2} </p>
        </div>
    );

}


export default Results;