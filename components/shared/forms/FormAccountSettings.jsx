import { useState, useEffect } from 'react'

const FormAccountSettings = () => {
  const [fisrtName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [shortAdress, setShortAdress] = useState('')
  const [addr01, setAddr01] = useState('')
  const [addr02, setAddr02] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [country, setCountry] = useState('')
  const [company, setCompany] = useState('')
  const [image, setImage] = useState('')

  return (
    <form
      className='ps-form--account-settings'
      action='index.html'
      method='get'
    >
      <div className='row'>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='first_name'>First Name</label>
            <input
              id='first_name'
              className='form-control'
              type='text'
              placeholder='First Name'
              value={fisrtName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='email'>Last Name</label>
            <input
              id='last_name'
              className='form-control'
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='mobile'>Mobile</label>
            <input
              id='mobile'
              className='form-control'
              type='number'
              placeholder='Mobile'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='mobile'>Email</label>
            <input
              id='email'
              className='form-control'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
        </div>

        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='address'>Short Address</label>
            <input
              id='short-address'
              className='form-control'
              type='text'
              placeholder='Short Address'
              value={shortAdress}
              onChange={(e) => setShortAdress(e.target.value)}
            />
          </div>
        </div>

        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='customer_address_1'>Customer Address 1</label>
            <input
              id='customer_address_1'
              className='form-control'
              type='text'
              placeholder='Customer Address 1'
              value={addr01}
              onChange={(e) => setAddr01(e.target.value)}
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='customer_address_2'>Customer Address 2</label>
            <input
              id='customer_address_2'
              className='form-control'
              type='text'
              placeholder='Customer Address 2'
              value={addr02}
              onChange={(e) => setAddr02(e.target.value)}
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='state'>State</label>
            <input
              id='state'
              className='form-control'
              type='text'
              placeholder='State'
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='state'>City</label>
            <input
              id='city'
              className='form-control'
              type='text'
              placeholder='City'
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='state'>Zip Code</label>
            <input
              id='zip_code'
              className='form-control'
              type='number'
              placeholder='zip_code'
              value={zip}
              onChange={(e) => setZip(e.target.value)}
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='state'>Country</label>
            <input
              id='country'
              className='form-control'
              type='text'
              placeholder='country'
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='state'>Company Name</label>
            <input
              id='company_name'
              className='form-control'
              type='text'
              placeholder='Company Name'
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='customer_address_2'>Profile Logo/Picture</label>
            <input id='profile_picture' className='form-control' type='file' />
          </div>
        </div>
      </div>
      <div className='ps-form__submit text-center'>
        <button className='ps-btn success'>Update Profile</button>
      </div>
    </form>
  )
}

export default FormAccountSettings
