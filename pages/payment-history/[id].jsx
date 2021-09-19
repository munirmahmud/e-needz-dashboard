import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ContainerDefault from '~/components/layouts/ContainerDefault'
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard'

const PaymentDetails = () => {
  const router = useRouter()
  const { id } = router.query

  const [details, setDetails] = useState([])

  useEffect(() => {
    var formdata = new FormData()
    formdata.append('order_no', id)

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    }

    fetch(
      'http://178.128.30.38/api/react/customer_dashboard/payment_details',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.table(result.data)
        if (result.response_status === 200) {
          setDetails(result.data)
        }
      })
      .catch((error) => console.log('error', error))
  }, [id])

  const orderItems = [
    {
      id: '#A580',
      date: 'Aug 15, 2020',
      order_number: 54545279,
      total: '$56.00',
      order_status: 'Pending',
      remaining_time: '02 D 10 H 52 M 44 S',
      payment_status: true,
    },
    {
      id: '#B260',
      date: 'Aug 15, 2020',
      order_number: 54545279,
      total: '$56.00',
      order_status: 'Paid',
      remaining_time: '02 D 10 H 52 M 44 S',
      payment_status: false,
    },
    {
      id: '#A583',
      date: 'Aug 17, 2020',
      order_number: 54545279,
      total: '$56.00',
      payment_status: true,
      order_status: 'Pending',
      remaining_time: '02 D 10 H 52 M 44 S',
    },
    {
      id: '#A523',
      date: 'Aug 18, 2020',
      order_number: 54545279,
      total: '$56.00',
      payment_status: false,
      order_status: 'Paid',
      remaining_time: '02 D 10 H 52 M 44 S',
    },
    {
      id: '#A112',
      date: 'Aug 19, 2020',
      order_number: 54545279,
      total: '$56.00',
      order_status: 'Pending',
      payment_status: false,
      remaining_time: '02 D 10 H 52 M 44 S',
    },
  ]

  const checkStatus = (state) => {
    if (state === '1') {
      return 'pending'
    }
    if (state === '2') {
      return 'approved'
    }
    if (state === '3') {
      return 'cancel'
    }
  }

  const tableItemsView = details.map((item, index) => {
    let badgeView

    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          <strong> {item.payment_id_no}</strong>
        </td>
        <td>{item.order_id}</td>
        <td>{item.customer_name}</td>
        <td>{item.payment_method}</td>
        <td>{checkStatus(item.payment_status)}</td>
        <td>
          <strong>{item.payment_amount}</strong>
        </td>
        <td className='text-center'>{item.date}</td>
      </tr>
    )
  })

  return (
    <ContainerDefault>
      <HeaderDashboard
        title='Payment Details'
        description='E-needz - Customer Payment Details'
      />
      <section className='ps-items-listing'>
        <div className='ps-section__content'>
          <div className='table-responsive'>
            <table className='table ps-table text-center'>
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Payment ID</th>
                  <th>Order ID</th>
                  <th>Name</th>
                  <th>Payment Method</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>{tableItemsView}</tbody>
            </table>
          </div>
        </div>
      </section>
    </ContainerDefault>
  )
}

export default PaymentDetails
