// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, type, title, amount} = transactionDetails

  const deleteBtn = () => {
    deleteTransaction(id)
  }

  return (
    <li className="table-row">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <div>
        <button type="button" onClick={deleteBtn}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
