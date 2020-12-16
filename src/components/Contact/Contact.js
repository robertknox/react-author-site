import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    font-family:Arial, Helvetica, sans-serif;
    background: linear-gradient(to buttom, #f05055,#e1eec5);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  borderL 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vt;
  padding: 0 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resizeL none;
  ${sharedStyles}
  `;

const StyledButton = styled.button`
  displayL block;
  background-color: #f7779d;
  font-size:.9rem;
  border: 0;
  border-radiusL 5ps;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizeing: border-box;
  `;

const StyledFieldSet = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5x;
  padding: 10px;
  margin: 20px 0;
  
    legend { 
      padding: 0 10px;
    }

    label {
      padding-right: 20px;
    }

    input {
      margin-right: 10px;
    }

  }`;

const StyledError = styled.div`
  color: red;
  font-weightL 800;
  margin: 0 0 40px 0;
`;

class Contact extends React.Component {
  state = {
    name: "test",
    email: "test",
    message: "test",
    password: "test",
    gender: "female",
  };

  error = "";

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", gender: "female" };
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      password: "",
      subject: "",
      message: "",
    });
  }

  handleInputChange = (e) => {
    console.log("handleInputChange:" + e.currentTarget.value);
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;
    this.setState((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  handleSubmit = (e) => {
    console.log("handleSubmit:" + e.currentTarget);
    e.preventDefault();

    const { name, email, subject, message } = this.state;
    /*
    Email.send({
      Host: "smtp.gmail.com",
      Username: "robertselkirkknox-programmer@gmail.com",
      Password: "Joaquim1Julia2",
      To: "robertselkirkknox@yahoo.com",
      From: "test@test.com",
      Subject: "<email subject>",
      Body: "<email body>",
    }).then((message) => alert("mail sent successfully"));
*/
    this.resetForm();
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <StyledFormWrapper>
          <StyledForm>
            <h1> Sign Up For Mailing List </h1>
            <label htmlFor="name">Name</label>
            <StyledInput
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <label htmlFor="email">Email</label>
            <StyledInput
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <lable htmlFor="password">Password</lable>
            <StyledInput
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <StyledFieldSet>
              <legend>Gender</legend>
              <label>
                <input
                  type="radio"
                  value="female"
                  name="gender"
                  checked={this.state.gender === "female"}
                  onChange={this.handleInputChange}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  value="male"
                  name="gender"
                  checked={this.state.gender === "male"}
                  onChange={this.handleInputChange}
                />
                Male
              </label>
            </StyledFieldSet>
            <label htmlFor="message">Message</label>
            <StyledTextArea
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
            {this.error && (
              <StyledError>
                <p> {this.error}</p>
              </StyledError>
            )}
            <StyledButton type="submit" onClick={this.handleSubmit}>
              Send Message
            </StyledButton>
          </StyledForm>
        </StyledFormWrapper>
      </>
    );
  }
}

export default Contact;
