import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import ConfirmDialog from "../components/Modals/ConfirmDialog";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      message: "",
      confirmDialogTitle: "",
      isConfirmDialogOpen: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const data = { email: this.state.email, message: this.state.message };

    if (data.email.length < 5 && data.message.length < 5) {
      this.setState({
        isConfirmDialogOpen: true,
        confirmDialogTitle: "Please fill both of the fields properly.",
      });
    } else {
      this.setState({
        isConfirmDialogOpen: true,
        confirmDialogTitle:
          "Thank you for sending a message. I will be in touch as soon as possible.",
      });

      await axios
        .post(
          // "http://localhost:5001/portfolio-2798d/us-central1/submit?" +
          //   "email=" +
          //   data.email +
          //   "&message=" +
          //   data.message,
          "https://us-central1-portfolio-2798d.cloudfunctions.net/submit?" +
            "email=" +
            data.email +
            "&message=" +
            data.message
          // data // useless
        )
        .then((res) => {
          console.log("res", res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    const { isConfirmDialogOpen, confirmDialogTitle } = this.state;

    return (
      <section className="contact" id="contact">
        <div className="container">
          <h1>Get in touch</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="cont">
              <label className="label">Email:</label>
              <input
                className="email-field"
                name="email"
                type="email"
                placeholder="email@example.com"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
              <label className="label">Message:</label>
              <textarea
                className="message-field"
                name="message"
                placeholder="I am interested in your portfolio..."
                type="text"
                value={this.state.message}
                onChange={this.handleInputChange}
              />
              <Button
                className="submit-button"
                variant="danger btn-lg"
                onClick={this.handleSubmit}
              >
                <b>Submit</b>
              </Button>
            </div>
          </form>
          <ConfirmDialog
            positiveButtonText="Ok"
            title={confirmDialogTitle}
            open={isConfirmDialogOpen}
            onConfirm={() => this.setState({ isConfirmDialogOpen: false })}
          />
        </div>
      </section>
    );
  }
}

export default Contact;
