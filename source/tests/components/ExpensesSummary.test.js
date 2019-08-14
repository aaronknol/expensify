import React from 'React';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary.js'
import expenses from '../fixtures/expenses';
import expensesTotal from '../../selectors/expenses-total';

test('should render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={expenses.length} expensesTotal={expensesTotal(expenses)} />);
    expect(wrapper.find('p').text()).toBe('Viewing 3 expenses totalling $1,141.95 ');
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with single total', () => {
    var testExpenses = [expenses[0]];
    console.log('1. ', testExpenses.length);
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={expensesTotal([expenses[0]])} />);
    expect(wrapper.find('p').text()).toMatch('Viewing 1 expense totalling $1.95');
    expect(wrapper).toMatchSnapshot();
});
