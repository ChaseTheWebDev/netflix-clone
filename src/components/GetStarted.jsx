import '../styles/GetStarted.css'

export default function GetStarted() {
    return (
        <div className='get-started-component'>
            <p>Ready to watch? Enter your email to create or restart your membership</p>
            <div className='get-started-div'>
                <input placeholder='Email address' />
                <button className='get-started-button'>Get Started</button>
            </div>
        </div>
    );
}