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
                <div className='form-group'>
                    <label htmlFor='name'>Your full name</label>
                    <input type='text' className='form-control' name='name'
                        placeholder='Fullname' onChange={onInputChange}
                        value={formData.name} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>YourPassword</label>
                    <input type='password' className='form-control' name='password'
                        placeholder='Password' onChange={onInputChange}
                        value={formData.password} />
                </div>
                <div className='form-group'>
                    <label htmlFor='edition'>Your edition</label>
                    <select className='form-control' name='edition' 
                            onChange={onInputChange}
                            id='updates' value={formData.updates}>
                        <option value='North Edition'>North Edition</option>
                        <option value='East Edition'>East Edition</option>
                        <option value='West Edition'>West Edition</option>
                        <option value='South Edition'>South Edition</option>
                    </select>
                </div>
                <button type='button' className='btn' 
                    onClick={() => console.log('button')}>SignUp</button>
            </form>
        </div>
    )
}

export default FormChallenge
