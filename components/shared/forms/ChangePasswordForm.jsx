import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ChangePasswordForm = () => {
  const [email, setEmail] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handlePasswordChange = (e) => {
    e.preventDefault()
    var formdata = new FormData()
    formdata.append('customer_id', 'Z6T6YKX1M9VN3FR')
    formdata.append('email', email)
    formdata.append('password', oldPassword)
    formdata.append('newpassword', newPassword)
    formdata.append('retypepassword', confirmPassword)

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    }

    fetch(
      'http://178.128.30.38/api/react/customer_dashboard/change_password',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.response_status === 200) {
          toast.success('Your Password has been updated')
        } else {
          toast.warning(result.message)
        }
      })
      .catch((error) => console.log('error', error))
  }

  return (
    <form className='ps-form--account-settings' onSubmit={handlePasswordChange}>
      <ToastContainer />
      <div className='row'>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='first_name'>Email</label>
            <input
              id='email'
              className='form-control'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='first_name'>Old Password</label>
            <input
              id='email'
              className='form-control'
              type='password'
              placeholder='Old Password'
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='first_name'>New Password</label>
            <input
              id='email'
              className='form-control'
              type='password'
              placeholder='New Password'
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='form-group'>
            <label htmlFor='first_name'>Confirm Password</label>
            <input
              id='email'
              className='form-control'
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <div className='ps-form__submit text-center'>
        <button className='ps-btn warning' type='submit'>
          Change Password
        </button>
      </div>
    </form>
  )
}

export default ChangePasswordForm
