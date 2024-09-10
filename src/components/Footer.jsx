import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import Dropdown from './Dropdown';

export default function Footer() {
    const languageOptions = ['English', 'Spanish', 'French', 'German', 'Chinese'];

    return (
        <div className="footer">
            <div className='footer-contact-info'>Questions? Call <address><Link to="tel:1-844-505-2993">1-844-505-2993</Link></address></div>
            <div className="link-container">
                <ul>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/investor-relations">Investor Relations</Link></li>
                    <li><Link to="/buy-gift-cards">Buy Gift Cards</Link></li>
                    <li><Link to="/cookie-preferences">Cookie Preferences</Link></li>
                    <li><Link to="/legal-notices">Legal Notices</Link></li>
                </ul>
                <ul>
                    <li><Link to="/help-center">Help Center</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/ways-to-watch">Ways to Watch</Link></li>
                    <li><Link to="/corporate-information">Corporate Information</Link></li>
                    <li><Link to="/only-on-netflix">Only on Netflix</Link></li>
                </ul>
                <ul>
                    <li><Link to="/account">Account</Link></li>
                    <li><Link to="/netflix-shop">Netflix Shop</Link></li>
                    <li><Link to="/terms-of-use">Terms of Use</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/do-not-sell-or-share-my-personal-information">Do Not Sell or Share My Personal Information</Link></li>
                </ul>
                <ul>
                    <li><Link to="/media-center">Media Center</Link></li>
                    <li><Link to="/redeem-gift-card">Redeem Gift Card</Link></li>
                    <li><Link to="/privacy">Privacy</Link></li>
                    <li><Link to="/speed-test">Speed Test</Link></li>
                    <li><Link to="/ad-choices">Ad Choices</Link></li>
                </ul>
            </div>
            <Dropdown options={languageOptions} defaultOption="English" type='language' />
        </div>
    );
}
