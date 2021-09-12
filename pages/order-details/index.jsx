import { Select } from "antd";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import { toggleDrawerMenu } from "~/store/app/action";

const { Option } = Select;
const OrderDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerMenu(false));
  }, []);
  return (
    <ContainerDefault>
      <HeaderDashboard
        title="Order Details"
        description="E-needz - Order Details"
      />
      <section className="ps-items-listing">
        <div className="ps-section__header simple">
          <div className="ps-section__filter">heading</div>
        </div>
      </section>
    </ContainerDefault>
  );
};
export default connect((state) => state.app)(OrderDetails);
