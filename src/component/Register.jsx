import React, { useState } from 'react'

const Register = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        address: '',
        updates: '',
        gender:'male',
        agreeToTerms: false
    })

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
        console.log(formData)
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
            <h2>Register</h2>
            <form>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' className='form-control' name='email'
                        placeholder='Enter email' onChange={onInputChange}
                        value={formData.email} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' className='form-control' name='password'
                        placeholder='Password' onChange={onInputChange}
                        value={formData.password} />
                </div>
                <div className='form-group'>
                    <label htmlFor='address'>Address</label>
                    <textarea className='form-control' rows={5} name='address'
                        onChange={onInputChange} value={formData.address}></textarea>
                </div>
                <div className='form-group'>
                    <label htmlFor='updates'>Update Frequency</label>
                    <select className='form-control' name='updates' 
                            onChange={onInputChange}
                            id='updates' value={formData.updates}>
                        <option value=''>==== Select an Option ====</option>
                        <option value='daily'>Daily</option>
                        <option value='weekly'>Weekly</option>
                        <option value='monthly'>Monthly</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Gender</label>
                </div>
                <div className='form-group'>
                    <input type='radio' id='male' name='gender' 
                        onChange={onInputChange}
                        checked={formData.gender === 'male'} value='male' />
                    <label htmlFor='gender' className='agree-label'>Male</label>
                </div>
                <div className='form-group'>
                    <input type='radio' id='female' name='gender' 
                        onChange={onInputChange}
                        value='female' checked={formData.gender === 'female'}/>
                    <label htmlFor='gender' className='agree-label'>Female</label>
                </div>
                <hr />
                <div className='form-group'>
                    <input type='checkbox' name='agreeToTerms' onChange={onInputChange}
                        value={formData.agreeToTerms} />
                    <label htmlFor='terms' className='agree-label'>I agree to the terms and conditions</label>
                </div>
                <button type='button' className='btn-primary' 
                    disabled={!formData.agreeToTerms} 
                    onClick={() => console.log('button')}>Register</button>
            </form>
        </div>
    )
}

export default Register
