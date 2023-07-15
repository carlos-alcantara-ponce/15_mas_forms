import React from 'react';


const UserForm = props => {
    const datosInp = props.datosInp;
    const seteaInp = props.seteaInp;

    const onChange = e => {

        console.log("Entra a onChange")

        seteaInp(
            {
                ...datosInp,
                [e.target.name]: e.target.value
            });

        console.log("e.target.name:" + e.target.name)
        console.log("e.target.value:" + e.target.value)
        console.log(datosInp.firstName)
        console.log(datosInp.firstName.length)
        console.log(datosInp.lastName)
        console.log(datosInp.lastName.length)
        // console.log(datosInp.email)
        // console.log(datosInp.password)
        // console.log(datosInp.password2);


        // if (datosInp.firstName.length === 1) {
        //     seteaInp(
        //         {
        //             ...datosInp,
        //             valfirstName: false
        //         });
        // } else {
        //     seteaInp(
        //         {
        //             ...datosInp,
        //             valfirstName: true
        //         });
        // }
    };


    return (

        // <form onSubmit={createUser}>
        <form>
            {/* <div className="form-group"> */}
            <div className="row mb-3">
                <div className="col-1">
                    <label>Firstname: </label>
                </div>
                <div className="col-11">
                    <input type="text" onChange={onChange} name="firstName" />
                    {(datosInp.firstName.length !== 1) ?
                        <p></p> :
                        <p>First Name must be at least 2 characters</p>}
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-1">
                    <label>Lastname: </label>
                </div>
                <div className="col-11">
                    <input type="text" onChange={onChange} name="lastName" />
                    {(datosInp.lastName.length !== 1) ?
                        <p></p> :
                        <p>Last Name must be at least 2 characters</p>}
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-1">
                    <label>Email Address: </label>
                </div>
                <div className="col-11">
                    <input type="email" onChange={onChange} name="email" />
                    {(datosInp.email.length === 0 || datosInp.email.length > 4) ?
                        <p></p> :
                        <p>Email  must be at least 5 characters</p>}
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-1">
                    <label>Password: </label>
                </div>
                <div className="col-11">
                    <input type="password" onChange={onChange} name="password" />
                    {(datosInp.password.length === 0 || datosInp.password.length > 7) ?
                        <p></p> :
                        <p>Password  must be at least 8 characters</p>}
                    {(datosInp.password2 === datosInp.password) ?
                        <p></p> :
                        <p>Passwords must match</p>}
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-1">
                    <label>Confirm Password: </label>
                </div>
                <div className="col-11">
                    <input type="password" onChange={onChange} name="password2" />
                </div>
            </div>
            {/* <input type="submit" value="Create User" /> */}

        </form>

    );
};

export default UserForm;

