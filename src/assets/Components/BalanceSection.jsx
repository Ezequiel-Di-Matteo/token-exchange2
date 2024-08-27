import React from 'react';

const BalanceSection = ({
    account,
    connectWallet,
    disconnectWallet,
    balanceTokenA,
    balanceTokenB,
    withdrawAmountA,
    setWithdrawAmountA,
    withdrawTokenA,
    approveAmountA,
    setApproveAmountA,
    approveTokenA,
    depositAmountA,
    setDepositAmountA,
    depositTokenA,
    withdrawAmountB,
    setWithdrawAmountB,
    withdrawTokenB,
    approveAmountB,
    setApproveAmountB,
    approveTokenB,
    depositAmountB,
    setDepositAmountB,
    depositTokenB,
    reloadBalances,
    withdrawPendingBalances
}) => {
    return (
        <div className="trade-balance">
            <div className="trade-head-dv">
                <h2>Balance</h2>
            </div>
            {!account ? (
                <button className="trade-button" onClick={connectWallet}>Connect Wallet</button>
            ) : (
                <button className="trade-button" onClick={disconnectWallet}>Disconnect wallet</button>
            )}

            <div className="trade-cont-f">
                <h3>ONCE: {balanceTokenA}</h3>
                <form className='trade-form' onSubmit={(e) => { e.preventDefault(); withdrawTokenA(); }}>
                    <input
                        className='trade-input'
                        type="text"
                        id="withdraw-amount"
                        placeholder="Withdraw amount"
                        value={withdrawAmountA}
                        onChange={(e) => setWithdrawAmountA(e.target.value)}
                    />
                    <button className="trade-button" type="submit">Withdraw</button>
                </form>
                <form className='trade-form' onSubmit={(e) => { e.preventDefault(); approveTokenA(); }}>
                    <input
                        className='trade-input'
                        type="text"
                        id="allow-amount"
                        placeholder="Allow amount"
                        value={approveAmountA}
                        onChange={(e) => setApproveAmountA(e.target.value)}
                    />
                    <button className="trade-button" type="submit">Allow</button>
                </form>
                <form className='trade-form' onSubmit={(e) => { e.preventDefault(); depositTokenA(); }}>
                    <input
                        className='trade-input'
                        type="text"
                        id="deposit-amount"
                        placeholder="Deposit amount"
                        value={depositAmountA}
                        onChange={(e) => setDepositAmountA(e.target.value)}
                    />
                    <button className="trade-button" type="submit">Deposit</button>
                </form>
            </div>

            <div className="trade-cont-f">
                <h3>USDC: {balanceTokenB}</h3>
                <form className='trade-form' onSubmit={(e) => { e.preventDefault(); withdrawTokenB(); }}>
                    <input
                        className='trade-input'
                        type="text"
                        id="withdraw2-amount"
                        placeholder="Withdraw amount"
                        value={withdrawAmountB}
                        onChange={(e) => setWithdrawAmountB(e.target.value)}
                    />
                    <button className="trade-button" type="submit">Withdraw</button>
                </form>
                <form className='trade-form' onSubmit={(e) => { e.preventDefault(); approveTokenB(); }}>
                    <input
                        className='trade-input'
                        type="text"
                        id="allow2-amount"
                        placeholder="Allow amount"
                        value={approveAmountB}
                        onChange={(e) => setApproveAmountB(e.target.value)}
                    />
                    <button className="trade-button" type="submit">Allow</button>
                </form>
                <form className='trade-form' onSubmit={(e) => { e.preventDefault(); depositTokenB(); }}>
                    <input
                        className='trade-input'
                        type="text"
                        id="deposit2-amount"
                        placeholder="Deposit amount"
                        value={depositAmountB}
                        onChange={(e) => setDepositAmountB(e.target.value)}
                    />
                    <button className="trade-button" type="submit">Deposit</button>
                </form>
            </div>

            <div className="trade-buttons">
                <button className="trade-button" onClick={reloadBalances}>Reload</button>
                <button className="trade-button" onClick={withdrawPendingBalances}>Withdraw all</button>
            </div>

            {!account ? (
                <p className="account-detection">Disconnected wallet</p>
            ) : (
                <p className="account-detection">Connected wallet: {account}</p>
            )}

        </div>
    );
};

export default BalanceSection;