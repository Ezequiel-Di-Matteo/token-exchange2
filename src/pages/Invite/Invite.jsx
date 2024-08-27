import React, { useEffect } from 'react';
import './Invite.css';

const Invite = () => {
    useEffect(() => {
        const form = document.getElementById('wallet-form');
        const handleSubmit = (event) => {
            event.preventDefault();
            const walletAddress = document.getElementById('wallet-address').value;
            const generatedLink = `once.finance/trade/?ref=${walletAddress}`;
            document.getElementById('link-output').value = generatedLink;
        };

        form.addEventListener('submit', handleSubmit);

        return () => {
            form.removeEventListener('submit', handleSubmit);
        };
    }, []);

    return (
        <main className='invite-main'>
            <section className='invite-section'>
                <article className='invite-article'>
                    <h2 className='invite-h2'>Invite them to trade</h2>
                    <p>You'll earn 1% of all transactions made by your referrals on our platform, paid out in real time as soon they get approved.</p>

                    <div className="forms-container">
                        <div className="f-form">
                            <form id="wallet-form">
                                <input type="text" id="wallet-address" name="address" placeholder="Your Polygon wallet address" />
                                <button className="invite-button">Generate link</button>
                            </form>
                            <input type="text" id="link-output" readOnly value="Waiting for your wallet address..." className="results" />
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
};

export default Invite;