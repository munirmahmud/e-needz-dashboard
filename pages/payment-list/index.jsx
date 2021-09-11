import { Select } from "antd";
import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";
import { toggleDrawerMenu } from "~/store/app/action";

const { Option } = Select;
const PaymentList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerMenu(false));
  }, []);
  return (
    <ContainerDefault>
      <HeaderDashboard
        title="Payment List"
        description="E-needz - User Payment Lists"
      />
      <section className="ps-items-listing">
        <div className="ps-section__content">
          <p>No payment methods found</p>
        </div>
      </section>
    </ContainerDefault>
  );
};
export default connect((state) => state.app)(PaymentList);
