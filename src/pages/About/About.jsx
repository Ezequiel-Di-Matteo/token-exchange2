import React from 'react';
import { Link } from 'react-router-dom'; 
import './About.css';

const About = () => {
    return (
        <main className='about-main'>
            <section className='about-section'>
                <article className="about-article">
                    <h2 className='about-h2'>Our product is simple</h2>

                    <div className="card-container">
                        <div className="card">
                            <h3>Perfect scenario</h3>
                            <p>We sell the perfect scenario for exponential growth.</p>
                            <p>
                                Every day at 12:00 GMT, we launch a new token at a price of only
                                $0.001 USD.
                            </p>
                            <p>
                                With only one million tokens and a market cap of
                                $1,000, getting in early could lead to a great outcome.
                            </p>
                        </div>

                        <div className="card">
                            <h3>It's yours</h3>
                            <p>You always invest using your own wallets.</p>
                            <p>
                                This means your private keys and tokens remain under your
                                control.
                            </p>
                            <p>
                                All transactions are processed through a decentralized exchange,
                                giving you total freedom and flexibility.
                            </p>
                        </div>

                        <div className="card">
                            <h3>Keep earning</h3>
                            <p>You can keep earning by sharing our platform.</p>
                            <p>
                                From the invitations section, you can generate your own referral link
                                and promote it.
                            </p>
                            <p>
                                You will earn 1% of all transactions made by your referrals on our
                                platform, paid in real-time as soon as they are approved.
                            </p>
                        </div>
                    </div>

                    <div className="about-buttons">
                        <Link to="/Trade" className="about-button">Start Trading</Link> 
                        <Link to="/Invite" className="about-button2">Invite</Link> 
                    </div>
                </article>
            </section>
        </main>
    );
};

export default About;