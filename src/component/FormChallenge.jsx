import React, { useState } from 'react'
import '../css/FormChallenge.css'

const FormChallenge = () => {

    const [formData, setFormData] = useState({
        name: '',
        password: '',
        edition: '',

    })
    console.log(formData)
  

    function onInputChange(event) {

        // verbose approach
        // const name = event.target.name
        // const value = event.target.value
        // const type = event.target.type
        // const checked = event.target.checked

        // declarative approach
        const { name, value, type, checked } = event.target

        let data = {
            ...formData,
            [name]: type !== 'checkbox' ? value : checked
        }
        setFormData(data)
       
      
    }

    // function agreeToTerms(event) {
    //     let data = {
    //         ...formData,
    //         [event.target.name]: event.target.checked
    //     }
    //     setFormData(data)
    //     console.log(formData)
    // }

    return (
        <div className='container'>
            <h1>NewLetter SignUp Form</h1>
            <form>
                <div className='form-row'>
                    <label htmlFor='name'>Your full name</label>
                    <input type='text' className='form-control' name='name'
                        placeholder='Fullname' onChange={onInputChange}
                        value={formData.name} />
                </div>
                <div className='form-row'>
                    <label htmlFor='password'>YourPassword</label>
                    <input type='password' className='form-control' name='password'
                        placeholder='Password' onChange={onInputChange}
                        value={formData.password} />
                </div>
                <div className='form-row'>
                    <label htmlFor='edition'>Your edition</label>
                    <select className='form-control' name='edition' 
                            onChange={onInputChange}
                            id='updates' value={formData.updates}>
                        <option value=''>Select Option</option>
                        <option value='North Edition'>North Edition</option>
                        <option value='Time Of India'>Time Of India</option>
                        <option value='The Hindu'>The Hindu</option>
                        <option value='Mumbai Mirror'>Mumbai Mirror</option>
                    </select>
                </div>
                <button type='button' className='btn' 
                    onClick={() => console.log('button')}>SignUp</button>
            </form>
        </div>
    )
}

export default FormChallenge
