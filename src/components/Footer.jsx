import '../styles/Footer.css';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-get-started-container">
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div>
                    <input type="email" />
                    <button>GetStarted</button>
                </div>
                <div className="footer-main-container">
                    <p>Questions? Call <address>1-844-505-2993</address></p>
                    <div className="link-container">
                        <ul>
                            <li>FAQ</li>
                            <li>Investor Relations</li>
                            <li>Buy Gift Cards</li>
                            <li>Cookie Preferences</li>
                            <li>Legal Notices</li>
                        </ul>
                        <ul>
                            <li>Help Center</li>
                            <li>Jobs</li>
                            <li>Ways to Watch</li>
                            <li>Corporate Information</li>
                            <li>Only on Netflix</li>
                        </ul>
                        <ul>
                            <li>Account</li>
                            <li>Netflix Shop</li>
                            <li>Terms of Use</li>
                            <li>Contact Us</li>
                            <li>Do Not Sell or Share My Personal Information</li>
                        </ul>
                        <ul>
                            <li>Media Center</li>
                            <li>Redeem Gift Card</li>
                            <li>Privacy</li>
                            <li>Speed Test</li>
                            <li>Ad Choices</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}