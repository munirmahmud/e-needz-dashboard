import Link from 'next/link'
import { useEffect, useState } from 'react'
import Pagination from '~/components/elements/basic/Pagination'
import ContainerDefault from '~/components/layouts/ContainerDefault'
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard'

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([])
  const [splitPaymentHistory, setSplitPaymentHistory] = useState([])
  const [len, setLen] = useState(0)
  const [offset, setOffset] = useState(0)
  const [spliceNO, setSpliceNO] = useState(10)

  // useEffect(() => {
  //   console.log('offset', offset, 'spliceNO', spliceNO)
  // }, [offset, spliceNO])

  useEffect(() => {
    var formdata = new FormData()
    formdata.append('customer_id', 'BMJUCC22X54NZCN')

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    }

    fetch(
      'http://178.128.30.38/api/react/customer_dashboard/payment_history',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.table(result.data)
        if (result.response_status === 200) {
          setPaymentHistory(result.data)
          setSplitPaymentHistory(result.data)
          setLen(result.data.length)
        }
      })
      .catch((error) => console.log('error', error))
  }, [])

  const tableItemsView = splitPaymentHistory
    .splice(offset, spliceNO)
    .map((item, index) => {
      return (
        <tr key={item.payment_id} className='text-center'>
          <td>{index + 1}</td>
          <td>
            <strong>{item.payment_id}</strong>
          </td>
          <td>{item.order_id}</td>
          <td>{item.customer_name}</td>
          <td>
            <strong>{item.payment_amount}</strong>
          </td>
          <td>
            <Link href={`/payment-history/${item.order_no}`}>
              {item.order_no !== null ? (
                <a className='dropdown-item text-center'>Details</a>
              ) : (
                ''
              )}
            </Link>
          </td>
        </tr>
      )
    })
  return (
    <ContainerDefault>
      <HeaderDashboard
        title='Payment History'
        description='E-needz - Customer Payment History'
      />
      <section className='ps-items-listing'>
        <div className='ps-section__content'>
          <div className='table-responsive'>
            <table className='table ps-table'>
              <thead>
                <tr className='text-center'>
                  <th>SL</th>
                  <th>Payment ID</th>
                  <th>Order ID</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th className='text-center'>Action</th>
                </tr>
              </thead>
              <tbody>{tableItemsView}</tbody>
            </table>
          </div>
        </div>
        <div className='ps-section__footer'>
          <p>Show 10 in {len} items.</p>
          <Pagination
            setSpliceNO={setSpliceNO}
            spliceNO={spliceNO}
            offset={offset}
            setOffset={setOffset}
            len={len}
          />
        </div>
      </section>
    </ContainerDefault>
  )
}
export default PaymentHistory
