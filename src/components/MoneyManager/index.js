import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

console.log(transactionTypeOptions)

class MoneyManager extends Component {
  sate = {
    titleInput: '',
    amountInput: '',
    transactionList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onChangeType = event => {
    this.setState({
      optionId: event.target.value,
    })
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeOption

    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
      transactionList: [...prevState, newTransaction],
    }))
  }

  getIncomeAmount = () => {
    let incomeAmount = 0
    const {transactionList} = this.state
    transactionList.forEach(transactionItem => {
      if (transactionItem.type === transactionTypeOptions[0].displayText) {
        incomeAmount += transactionItem.amount
      }
    })
    return incomeAmount
  }

  getExpensesAmount = () => {
    let expensesAmount = 0
    const {transactionList} = this.state
    transactionList.forEach(transactionItem => {
      if (transactionItem.type === transactionTypeOptions[1].displayText) {
        expensesAmount += transactionItem.amount
      }
    })
    return expensesAmount
  }

  getBalanceAmount = () => {
    let balanceAmount = 0
    let expensesAmount = 0
    let incomeAmount = 0
    const {transactionList} = this.state
    transactionList.forEach(transactionItem => {
      if (transactionItem.type === transactionTypeOptions[0].displayText) {
        incomeAmount += transactionItem.amount
      } else {
        expensesAmount += transactionItem.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    console.log(balanceAmount)
  }

  deleteTransaction = id => {
    const {transactionList} = this.state
    const update = transactionList.filter(each => each.id !== id)

    this.setState({
      transactionList: update,
    })
  }

  render() {
    const {titleInput, amountInput, optionId, transactionList} = this.state

    // const balanceAmount = incomeAmount - expensesAmount
    const {balanceAmount} = this.getBalanceAmount()
    const {incomeAmount} = this.getIncomeAmount()
    const {expensesAmount} = this.getExpensesAmount()

    return (
      <div className="container">
        <div className="top-container">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>

        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />

        <div className="transcations-detail-container">
          <form className="transaction-form" onSubmit={this.onAddTransaction}>
            <h1>Add Transaction </h1>
            <label htmlFor="inputEl">TITLE</label>
            <input
              type="text"
              placeholder="TITLE"
              id="inputEl"
              onChange={this.onChangeTitle}
              value={titleInput}
            />
            <label htmlFor="amount">AMOUNT</label>
            <input
              id="amount"
              placeholder="AMOUNT"
              type="text"
              onChange={this.onChangeAmount}
              value={amountInput}
            />

            <label htmlFor="type">TYPE</label>
            <select id="type" value={optionId} onChange={this.onChangeType}>
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.displayText}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit"> Add</button>
          </form>

          <div className="history-container">
            <h1>History</h1>
            <ul className="table-header-row">
              <li>
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </li>
              {transactionList.map(eachTra => (
                <TransactionItem
                  key={eachTra.id}
                  transactionDetails={eachTra}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
