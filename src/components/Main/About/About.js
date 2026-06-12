import './About.css';

export function About() {
  return (<section id="About">
    <h2>Why Book With Us?</h2>
    <div className='AboutInformation'>
      <ul>
        <li>
          <h4>Handpicked Homes</h4>
          <p>We don’t do boring hotels or copy-paste apartments. Every property on our platform is handselected for its unique character, stunning design, and exceptional cozy vibes.</p>
        </li>
        <li>
          <h4>No Hidden Fees</h4>
          <p>What you see is what you pay. We believe in 100% price transparency, with no surprise service charges or hidden costs at checkout.</p>
        </li>
        <li>
          <h4>Verified Hosts & Safe Stays</h4>
          <p>Your peace of mind is our priority. Every host is fully verified, and every home is checked to ensure your stay is safe, seamless, and exactly as pictured.</p>
        </li>
        <li>
          <h4>24/7 Support</h4>
          <p>Whether you need check-in assistance or local recommendations, our dedicated support team is always just a click away, anytime, anywhere.</p>
        </li>
      </ul>
    </div>
  </section>
  );
}
