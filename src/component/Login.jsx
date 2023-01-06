import React, { useState } from 'react'

const Login = () => {

    // const [email, setEmail] = useState('welcome.email')
    // const [password, setPassword] = useState('hello')


    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    function onLoginButtonClick() {
        console.log(formData)

        /**
         * Challenge:
         * Update the login function so that it will verify the email and password.
         * If the email is equal to 'welcome' and the password is equal to 'hello'
         * then the login is successful. Otherwise, the login is not successful.
         * 
         * If the login is successful, then display a with the message below the form saying
         * 'Login successful'. Otherwise, display a message saying 'Login failed'.
         */
    }

    function onInputChange(event) {
        let data = {
            ...formData,
            [event.target.name]: event.target.value
        }
        setFormData(data)
        console.log(formData)
    }

    return (
        <div className='container'>
            <h2>Login</h2>
            <form>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' className='form-control' name='email'
                        placeholder='Enter email' onChange={onInputChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' className='form-control' name='password' placeholder='Password' onChange={onInputChange} />
                </div>
                <button type='button' className='btn-primary' onClick={onLoginButtonClick}>Login</button>
            </form>
        </div>
    )
}

export default Login
