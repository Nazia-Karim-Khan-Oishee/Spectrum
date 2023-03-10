import "./form.css";
import React, { useState } from "react";
import Axios from "axios";
const Form = () => {
    const [storename, setStorename] = useState("");
    const [platformlink, setPlatformlink] = useState("");
    const [logoimage, setLogoimage] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [division, setDivision] = useState("");
    const [address, setAddress] = useState("");
    const [bankaccount, setBankaccount] = useState("");
    const [idimage, setIdimage] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      Axios.post("http://localhost:8000/insert", {
        storename: storename,
        platformlink: platformlink,
        logoimage: logoimage,
        email: email,
        phone: phone,
        division: division,
        address: address,
        bankaccount: bankaccount,
        idimage: idimage,
      });
    };
    return (
      <form onSubmit={handleSubmit} className="form" autocomplete="off">
        <div className="form-header">
          <h2 className="form-heading">Become a seller</h2>
          <p className="form-subheading">It's quick and easy.</p>
        </div>
  
        <div className="form-body">
          <fieldset className="fluid-row">
            <input
              type="text"
              placeholder="Store Name"
              className="storename"
              minlength="2"
              required
              onChange={(e) => {
                setStorename(e.target.value);
              }}
            />
  
            <input
              type="text"
              placeholder="Platform Link"
              className="platformlink"
              minlength="2"
              required
              onChange={(e) => {
                setPlatformlink(e.target.value);
              }}
            />
          </fieldset>
  
          <fieldset>
            <input
              type="email"
              placeholder="Email"
              className="email"
              minlength="2"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {/* <input type="email" placeholder="Email address" name="email" required /> */}
          </fieldset>
          <fieldset>
            <input
              type="file"
              placeholder="Logo"
              className="logoimage"
              minlength="2"
              required
              onChange={(e) => {
                setLogoimage(e.target.value);
              }}
            />
          </fieldset>
  
          <fieldset className="input-container">
            {/* <label for="dob">Date of birth</label> */}
            {/* <input type="date" id="dob" required /> */}
            <input
              type="text"
              placeholder="Phone Number"
              className="phonenumber"
              minlength="2"
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </fieldset>
  
          <fieldset className="input-container">
            <input
              type="text"
              placeholder="Division"
              className="division"
              minlength="2"
              required
              onChange={(e) => {
                setDivision(e.target.value);
              }}
            />
  
          </fieldset>
          <fieldset className="input-container">
            {/* <label for="dob">Date of birth</label> */}
            {/* <input type="date" id="dob" required /> */}
            <input
              type="text"
              placeholder="Address"
              className="address"
              minlength="2"
              required
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </fieldset>
          <fieldset className="input-container">
            {/* <label for="dob">Date of birth</label> */}
            {/* <input type="date" id="dob" required /> */}
            <input
              type="text"
              placeholder="Phone Number"
              className="phonenumber"
              minlength="2"
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </fieldset>
          <fieldset className="input-container">
            {/* <label for="dob">Date of birth</label> */}
            {/* <input type="date" id="dob" required /> */}
            <input
              type="text"
              placeholder="Bank Account"
              className="bankaccount"
              minlength="2"
              required
              onChange={(e) => {
                setBankaccount(e.target.value);
              }}
            />
          </fieldset>
          <fieldset className="input-container">
            {/* <label for="dob">Date of birth</label> */}
            {/* <input type="date" id="dob" required /> */}
            <input
              type="file"
              placeholder="NID"
              className="idimage"
              minlength="2"
              required
              onChange={(e) => {
                setIdimage(e.target.value);
              }}
            />
          </fieldset>
  
          <div className="button-container">
            <button type="submit" className="button button-primary">
              Submit{" "}
            </button>
          </div>
        </div>
      </form>
    );
}

export default Form
