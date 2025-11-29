import "../styles/footer.css"

export default function Footer() {

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About */}
        <div className="footer-section">
          <h3>About NigerMeals</h3>
          <p>
            Delicious Nigerian meals delivered fast. Taste the authentic flavors of home!
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>Order</li>
            <li>Profile</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone: +234 905 365 0756</p>
          <p>Email: info@nigermeals.com</p>
          <div className="socials">
            <a href="#">FB</a>
            <a href="#">IG</a>
            <a href="#">TW</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} NigerMeals. All Rights Reserved.
      </div>
    </footer>
  );
}
