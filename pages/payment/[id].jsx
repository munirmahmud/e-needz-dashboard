import React from "react";
import ContainerDefault from "~/components/layouts/ContainerDefault";
import HeaderDashboard from "~/components/shared/headers/HeaderDashboard";

const MakePayment = () => {
  return (
    <ContainerDefault>
      <HeaderDashboard
        title="Payment Details"
        description="E-needz - Customer Payment Details"
      />
      <section className="ps-dashboard ps-items-listing">
        <section className="ps-card">
          <div className="ps-card__header">
            <h4>Payment Details</h4>
          </div>
          <div className="ps-card__content">
            <form
              className="ps-form--account-settings"
              action="index.html"
              method="get"
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="full_name">Grand Total</label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Grand Total"
                      defaultValue={"458"}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="full_name">Paid Amount</label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Paid Amount"
                      defaultValue={"458"}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="full_name">Due</label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Due"
                      defaultValue={"458"}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="full_name">Paying Amount</label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Paying Amount"
                      defaultValue={"200"}
                    />
                  </div>
                </div>

                <div className="col-sm-6">
                  <h3>Payment Gateways</h3>
                  <div className="form-group">
                    <div>
                      <input
                        id="bkash"
                        type="radio"
                        name="payment_gateway"
                        className="mr-3"
                      />
                      <label htmlFor="bkash">Bkash</label>
                    </div>
                    <div>
                      <input
                        id="nagad"
                        type="radio"
                        name="payment_gateway"
                        className="mr-3"
                      />
                      <label htmlFor="nagad">Nagad</label>
                    </div>
                    <div>
                      <input
                        id="sslcommerze"
                        type="radio"
                        name="payment_gateway"
                        className="mr-3"
                      />
                      <label htmlFor="sslcommerze">SSLcommerze</label>
                    </div>
                  </div>

                  <div className="ps-form__submit">
                    <button type="submit" className="ps-btn success">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
    </ContainerDefault>
  );
};

export default MakePayment;
