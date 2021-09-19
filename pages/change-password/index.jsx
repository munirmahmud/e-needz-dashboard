import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import ContainerDefault from '~/components/layouts/ContainerDefault'
import ChangePasswordForm from '~/components/shared/forms/ChangePasswordForm'
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard'
import { toggleDrawerMenu } from '~/store/app/action'

const SettingsPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(toggleDrawerMenu(false))
  }, [])
  return (
    <ContainerDefault title='Change Password'>
      <HeaderDashboard
        title='Change Password'
        description='E-needz user Change Password'
      />
      <section className='ps-dashboard ps-items-listing'>
        <div className='ps-section__left'>
          <section className='ps-card'>
            <div className='ps-card__header'>
              <h4>Change Password</h4>
            </div>
            <div className='ps-card__content'>
              <ChangePasswordForm />
            </div>
          </section>
        </div>
        <div className='ps-section__right'></div>
      </section>
    </ContainerDefault>
  )
}
export default connect((state) => state.app)(SettingsPage)
