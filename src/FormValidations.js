import React, { useState } from 'react';

function FormValidations() {

    function submit(e) {
        console.log(e)
        e.preventDefault();

    }


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={submit}>
                <input type='text' placeholder="enter user id" /> &nbsp;&nbsp;&nbsp;
                <input type='text' placeholder="enter password" /> &nbsp;&nbsp;&nbsp;
                <button type='submit'>submit</button>
            </form>
        </div>
    )

}

export default FormValidations