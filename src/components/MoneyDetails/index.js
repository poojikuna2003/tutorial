import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, expensesAmount, incomeAmount} = props

  return (
    <ul className="money-details-container">
      <li className="each-details-container balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />

        <div>
          <p>Your Balance</p>
          <p>Rs {balanceAmount}</p>
        </div>
      </li>

      <li className="each-details-container income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="balance"
        />

        <div>
          <p>Your Balance</p>
          <p>Rs {incomeAmount}</p>
        </div>
      </li>

      <li className="each-details-container expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="balance"
        />

        <div>
          <p>Your Balance</p>
          <p>Rs {expensesAmount}</p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
