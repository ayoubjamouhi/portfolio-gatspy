import React from "react";

const ContactPage = () => (
  <section>
    <h1>Contact me</h1>
    <form method="post">
      <label>
        Name <input type="text" name="name" id="name"/>
      </label>
      <label>
        Email <input type="text" name="email" id="email"/>
      </label>
      <label>
        Message <textarea name="message"></textarea>
      </label>
    </form>
  </section>
)
export default ContactPage