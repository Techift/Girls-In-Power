function Footer() {
  return (
    <div className="footer">
      <div className="footer_body">
        <div className="footer_logo">
          <h2>GirlsInPower</h2>
        </div>

        <div className="footer_links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              {" "}
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Programs</a>
            </li>
            <li>
              <a href="#">Get involved</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <footer
          style={{
            color: "white",
            padding: "2rem",
            textAlign: "center",
            fontSize: "0.9rem",
          }}
        >
          <p>© {new Date().getFullYear()} GirlsInPower. All rights reserved.</p>
          <p>
            Registered as a Non-Governmental <br /> Organization under the
            Corporate Affairs <br /> Commission (CAC), Nigeria.
          </p>
          <p>Contact girlsinpower.ngo@example.com</p>
        </footer>
      </div>
      <hr />
      <p>Privacy policy | Terms and conditions</p>
    </div>
  );
}
export default Footer;
