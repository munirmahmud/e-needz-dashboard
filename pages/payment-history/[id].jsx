import React from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";

const PaymentDetails = () => {
  const orderItems = [
    {
      id: "#A580",
      date: "Aug 15, 2020",
      order_number: 54545279,
      total: "$56.00",
      order_status: "Pending",
      remaining_time: "02 D 10 H 52 M 44 S",
      payment_status: true,
    },
    {
      id: "#B260",
      date: "Aug 15, 2020",
      order_number: 54545279,
      total: "$56.00",
      order_status: "Paid",
      remaining_time: "02 D 10 H 52 M 44 S",
      payment_status: false,
    },
    {
      id: "#A583",
      date: "Aug 17, 2020",
      order_number: 54545279,
      total: "$56.00",
      payment_status: true,
      order_status: "Pending",
      remaining_time: "02 D 10 H 52 M 44 S",
    },
    {
      id: "#A523",
      date: "Aug 18, 2020",
      order_number: 54545279,
      total: "$56.00",
      payment_status: false,
      order_status: "Paid",
      remaining_time: "02 D 10 H 52 M 44 S",
    },
    {
      id: "#A112",
      date: "Aug 19, 2020",
      order_number: 54545279,
      total: "$56.00",
      order_status: "Pending",
      payment_status: false,
      remaining_time: "02 D 10 H 52 M 44 S",
    },
  ];

  const tableItemsView = orderItems.map((item) => {
    let badgeView, fullfillmentView;

    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>
          <strong> 4545616</strong>
        </td>
        <td>{item.order_number}</td>
        <td>John Doe</td>
        <td>City Bank</td>
        <td>Paid</td>
        <td>
          <strong>{item.total}</strong>
        </td>
        <td>2020/21/10</td>
        <td>{badgeView}</td>
      </tr>
    );
  });

  return (
    <ContainerDefault>
      <HeaderDashboard
        title="Payment Details"
        description="E-needz - Customer Payment Details"
      />
      <section className="ps-items-listing">
        <div className="ps-section__content">
          <div className="table-responsive">
            <table className="table ps-table">
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
  );
};

export default PaymentDetails;
