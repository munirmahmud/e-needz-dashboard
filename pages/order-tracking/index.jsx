import { DatePicker, Select } from "antd";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Pagination from "~/components/elements/basic/Pagination";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import TableOrdersItems from "~/components/shared/tables/TableOrdersItems";
import { toggleDrawerMenu } from "~/store/app/action";

const { Option } = Select;
const OrderTracking = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerMenu(false));
  }, []);
  return (
    <ContainerDefault>
      <HeaderDashboard
        title="Order Tracking"
        description="E-needz Order Tracking Listing"
      />
      <section className="ps-items-listing">
        <div className="ps-section__header simple">
          <div className="ps-section__filter">
            <form className="ps-form--filter" action="index.html" method="get">
              <div className="ps-form__left">
                <div className="form-group">
                  <label htmlFor="order_number">Order Number</label>
                  <input
                    id="order_number"
                    className="form-control"
                    type="text"
                    placeholder="Order Number..."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="order_status">Order Status</label>
                  <Select
                    id="order_status"
                    placeholder="Order Status"
                    className="ps-ant-dropdown"
                    listItemHeight={20}
                  >
                    <Option value="pending">Pending</Option>
                    <Option value="processing">Processing</Option>
                    <Option value="picked">Picked</Option>
                    <Option value="shipping">Shipping</Option>
                    <Option value="delivered">Delivered</Option>
                    <Option value="returned">Returned</Option>
                    <Option value="refunded">Refund</Option>
                    <Option value="cancel">Cancel</Option>
                  </Select>
                </div>

                <div className="form-group">
                  <label htmlFor="order_date" className="d-block mb-4">
                    Date
                  </label>
                  <DatePicker id="order_date" className="mt-2" size="large" />
                </div>
              </div>
              <div className="ps-form__right mt-3">
                <label></label>
                <button className="ps-btn ps-btn--gray">
                  <i className="icon icon-funnel mr-2"></i>
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="ps-section__content">
          <TableOrdersItems />
        </div>
        <div className="ps-section__footer">
          <p>Show 10 in 30 items.</p>
          <Pagination />
        </div>
      </section>
    </ContainerDefault>
  );
};
export default connect((state) => state.app)(OrderTracking);
