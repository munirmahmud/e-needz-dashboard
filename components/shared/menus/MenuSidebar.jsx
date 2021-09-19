import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const MenuSidebar = () => {
  const router = useRouter()
  const menuItems = [
    {
      text: 'Manage Orders',
      url: '/',
      icon: 'icon-home',
    },
    {
      text: 'Order Tracking',
      url: '/order-tracking',
      icon: 'icon-bag2',
    },
    {
      text: 'Payment History',
      url: '/payment-history',
      icon: 'icon-users2',
    },
    {
      text: 'Settings',
      url: '/settings',
      icon: 'icon-cog',
    },
    {
      text: 'Change Password',
      url: '/change-password',
      icon: 'icon-cog',
    },
  ]

  return (
    <ul className='menu'>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={router.pathname === item.url ? 'active' : ''}
        >
          <Link href={item.url}>
            <a>
              <i className={item.icon}></i>
              {item.text}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default MenuSidebar
