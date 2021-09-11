import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContainerDashboard from "~/components/layouts/ContainerDashboard";
import CardEarning from "~/components/shared/cards/CardEarning";
import CardRecentOrders from "~/components/shared/cards/CardRecentOrders";
import CardSaleReport from "~/components/shared/cards/CardSaleReport";
import CardStatics from "~/components/shared/cards/CardStatics";
import CardTopCountries from "~/components/shared/cards/CardTopCountries";
import { toggleDrawerMenu } from "~/store/app/action";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerMenu(false));
  }, []);

  return (
    <ContainerDashboard title="Dashboard">
      <section className="ps-dashboard" id="homepage">
        <div className="ps-section__left">
          <div className="row">
            <div className="col-xl-8 col-12">
              <CardSaleReport />
            </div>
            <div className="col-xl-4 col-12">
              <CardEarning />
            </div>
          </div>
          <CardRecentOrders />
        </div>
        <div className="ps-section__right">
          <CardStatics />
          <CardTopCountries />
        </div>
      </section>
    </ContainerDashboard>
  );
};

export default Index;
