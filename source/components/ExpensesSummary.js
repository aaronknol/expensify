import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
    const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(props.expensesTotal/100).format('$0,0.00');

    return (
        <p>Viewing {props.expenseCount} {expenseWord} totalling {formattedExpenseTotal} </p>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: expensesTotal(visibleExpenses)
    }
}
const ConnectedExpenseSummary = connect(mapStateToProps)(ExpensesSummary);

export default ConnectedExpenseSummary;