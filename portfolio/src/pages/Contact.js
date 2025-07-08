import React, { useState } from "react";
import axios from "axios";
import ConfirmDialog from "../components/Modals/ConfirmDialog";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmDialogTitle, setConfirmDialogTitle] = useState("");
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = { email, message };

    if (data.email.length < 5 && data.message.length < 5) {
      setConfirmDialogTitle("Please fill both of the fields properly.");
      setIsConfirmDialogOpen(true);
    } else {
      setConfirmDialogTitle(
        "Thank you for sending a message. I will be in touch as soon as possible."
      );
      setIsConfirmDialogOpen(true);

      try {
        const res = await axios.post(
          "https://us-central1-portfolio-2798d.cloudfunctions.net/submit?" +
            "email=" +
            data.email +
            "&message=" +
            data.message
        );
        console.log("res", res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in touch
          </h1>
          <p className="text-lg text-gray-600">I'd love to hear from you!</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email:
              </label>
              <input
                className="input-field"
                name="email"
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message:
              </label>
              <textarea
                className="input-field min-h-[120px] resize-vertical"
                name="message"
                placeholder="I am interested in your portfolio..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div className="text-center">
              <button type="submit" className="btn-primary text-lg px-8 py-3">
                <b>Submit</b>
              </button>
            </div>
          </div>
        </form>

        <ConfirmDialog
          positiveButtonText="Ok"
          title={confirmDialogTitle}
          open={isConfirmDialogOpen}
          onConfirm={() => setIsConfirmDialogOpen(false)}
        />
      </div>
    </section>
  );
};

export default Contact;
