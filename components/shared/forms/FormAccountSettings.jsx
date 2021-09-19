import React from "react";

const FormAccountSettings = () => {
  return (
    <form
      className="ps-form--account-settings"
      action="index.html"
      method="get"
    >
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="full_name">Full Name</label>
            <input
              id="full_name"
              className="form-control"
              type="text"
              placeholder="Full Name"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form-control"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              id="mobile"
              className="form-control"
              type="number"
              placeholder="Mobile"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              className="form-control"
              type="text"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="customer_address_1">Customer Address 1</label>
            <input
              id="customer_address_1"
              className="form-control"
              type="text"
              placeholder="Customer Address 1"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="customer_address_2">Customer Address 2</label>
            <input
              id="customer_address_2"
              className="form-control"
              type="text"
              placeholder="Customer Address 2"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="state">State</label>
            <input
              id="state"
              className="form-control"
              type="text"
              placeholder="State"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="state">City</label>
            <input
              id="city"
              className="form-control"
              type="text"
              placeholder="City"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="state">Zip Code</label>
            <input
              id="zip_code"
              className="form-control"
              type="number"
              placeholder="zip_code"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="state">Country</label>
            <input
              id="country"
              className="form-control"
              type="text"
              placeholder="country"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="state">Company Name</label>
            <input
              id="company_name"
              className="form-control"
              type="text"
              placeholder="Company Name"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="customer_address_2">Profile Logo/Picture</label>
            <input id="profile_picture" className="form-control" type="file" />
          </div>
        </div>
      </div>
      <div className="ps-form__submit text-center">
        <button className="ps-btn ps-btn--gray mr-3">Cancel</button>
        <button className="ps-btn success">Update Profile</button>
      </div>
    </form>
  );
};

export default FormAccountSettings;
