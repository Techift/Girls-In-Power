function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p>Email: contact@girlsinpower.org</p>
      <p>Phone: +234 800 123 4567</p>
      <div className="socials">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
        <a href="#">LinkedIn</a>
        <a href="#">YouTube</a>
      </div>
    </section>
  );
}
export default Contact
