import { Menu } from 'antd'
import Link from 'next/link'
import React from 'react'
import DropdownAction from '~/components/elements/basic/DropdownAction'

const TableOrdersItems = ({ usrOrderItems, err }) => {
  const tableItemsView = usrOrderItems.map((item, index) => {
    if (item === undefined) return

    let badgeView, fullfillmentView

    const menuView = (
      <Menu>
        <Menu.Item key={0}>
          <Link href='/orders/order-detail/1'>
            <a className='dropdown-item'>Edit ads</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={0}>
          <a className='dropdown-item' href='#'>
            <i className='icon-t'></i>
            Delete
          </a>
        </Menu.Item>
      </Menu>
    )

    /**
     * @TODO
     * @assignee Hossain
     * @Date Sep 12 2021
     * @Task Please Change the background color according company policy
     **/

    if (item.order_status === '1') {
      badgeView = <span className='ps-badge success'>Pending</span>
    } else if (item.order_status === '2') {
      badgeView = (
        <span className='ps-badge' style={{ backgroundColor: 'yellow' }}>
          processing
        </span>
      )
    } else if (item.order_status === '3') {
      badgeView = <span className='ps-badge success'>shipping</span>
    } else if (item.order_status === '4') {
      badgeView = <span className='ps-badge success'>delivered</span>
    } else if (item.order_status === '5') {
      badgeView = <span className='ps-badge danger'>returned</span>
    } else if (item.order_status === '6') {
      badgeView = <span className='ps-badge success'>cancelled</span>
    } else if (item.order_status === '7') {
      badgeView = <span className='ps-badge success'>partial_delivery</span>
    } else if (item.order_status === '18') {
      badgeView = <span className='ps-badge success'>refunded</span>
    } else if (item.order_status === '19') {
      badgeView = <span className='ps-badge success'>picked</span>
    }

    // switch (item.fullfillment) {
    //   case 'In Progress':
    //     fullfillmentView = (
    //       <span className='ps-fullfillment warning'>In Progress</span>
    //     )
    //     break
    //   case 'Cancel':
    //     fullfillmentView = (
    //       <span className='ps-fullfillment danger'>Cancel</span>
    //     )
    //     break
    //   default:
    //     fullfillmentView = (
    //       <span className='ps-fullfillment success'>delivered</span>
    //     )
    //     break
    // }

    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          <strong> {item.date}</strong>
        </td>
        <td>
          <a href='#'>{item.order_id}</a>{' '}
        </td>
        <td>
          <strong>{item.total_amount}</strong>
        </td>
        <td>{badgeView}</td>
        <td>{item.remainingTime}</td>

        <td>
          <DropdownAction />
        </td>
      </tr>
    )
  })
  return (
    <>
      {err ? <Alert message='Failed to fetch data' type='error' /> : ''}
      <div className='table-responsive'>
        <table className='table ps-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Order No</th>
              <th>Total</th>
              <th>Status</th>
              <th>Remaining Time</th>
              <th className='text-right'>Action</th>
            </tr>
          </thead>
          <tbody>{tableItemsView}</tbody>
        </table>
      </div>
    </>
  )
}

export default TableOrdersItems
