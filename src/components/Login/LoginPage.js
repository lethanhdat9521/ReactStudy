/* eslint-disable no-undef */
import styles from "./LoginPage.module.css";
import React, { useState, useEffect } from "react";

import { Container, Button, Alert, Form } from "react-bootstrap";

const Login = () => {
  const [phoneValue, setPhoneValue] = useState("");
  const [passwordValue, setPasswordValue] = useState(""); // Thêm state mới cho mật khẩu
  const [test, setTestValue] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault(); // Ngăn trình duyệt tải lại trang
    console.log("Dữ liệu được gửi:", {
      username: inputValue,
      password: passwordValue,
    });
    fetchData(inputValue); // Gọi API
  };
  function onchangeFunction(event) {
    setPhoneValue(event.target.value);
    console.log(event);
  }
  return (
    <>
      <div>
        <form>
          <label>Enter your name</label>
          <input type="text" value={phoneValue} onChange={onchangeFunction} />
        </form>
        <input></input>
        <Button variant="primary" onClick={test1} className="mb-3">
          Click
        </Button>
        <p>{test}</p>
      </div>

      {/* </Form> */}
    </>
  );
  function test1() {
    console.log("G", test);
    setTestValue(test + 1);
  }
};

async function getData() {
  const url = "https://jsonblob.com/api/1412729965757259776";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

export default Login;
