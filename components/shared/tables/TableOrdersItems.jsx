import { Menu } from "antd";
import Link from "next/link";
import React from "react";
import DropdownAction from "~/components/elements/basic/DropdownAction";

const TableOrdersItems = () => {
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
    const menuView = (
      <Menu>
        <Menu.Item key={0}>
          <Link href="/orders/order-detail/1">
            <a className="dropdown-item">Edit ads</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={0}>
          <a className="dropdown-item" href="#">
            <i className="icon-t"></i>
            Delete
          </a>
        </Menu.Item>
      </Menu>
    );
    if (item.payment_status) {
      badgeView = <span className="ps-badge success">Paid</span>;
    } else {
      badgeView = <span className="ps-badge gray">Unpaid</span>;
    }
    switch (item.fullfillment) {
      case "In Progress":
        fullfillmentView = (
          <span className="ps-fullfillment warning">In Progress</span>
        );
        break;
      case "Cancel":
        fullfillmentView = (
          <span className="ps-fullfillment danger">Cancel</span>
        );
        break;
      default:
        fullfillmentView = (
          <span className="ps-fullfillment success">delivered</span>
        );
        break;
    }
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>
          <strong> Aug 15, 2020</strong>
        </td>
        <td>{item.order_number}</td>
        <td>
          <strong>{item.total}</strong>
        </td>
        <td>{badgeView}</td>
        <td>{item.remaining_time}</td>

        <td>
          <Link href="/payment/1">
            <a className="ps-badge warning">Make Payment</a>
          </Link>
        </td>
        <td>
          <DropdownAction />
        </td>
      </tr>
    );
  });

  return (
    <div className="table-responsive">
      <table className="table ps-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Order No</th>
            <th>Total</th>
            <th>Status</th>
            <th>Remaining Time</th>
            <th>Payment Options</th>
            <th className="text-right">Action</th>
          </tr>
        </thead>
        <tbody>{tableItemsView}</tbody>
      </table>
    </div>
  );
};

export default TableOrdersItems;
