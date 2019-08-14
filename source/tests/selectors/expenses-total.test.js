import expensesTotal from '../../selectors/expenses-total';

import expenses from '../fixtures/expenses';



test('should return 0 if no expenses', () => {
    const result = expensesTotal([]);
    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const newExpenses = [expenses[1]];
    const result = expensesTotal(newExpenses);
    
    expect(result).toBe(109500);
});

test('should correctly add up multiple expense', () => {
    const result = expensesTotal(expenses);
    
    expect(result).toBe(114195);
});

// test('should filter by text value', () => {
//     const filters = {
//         text: 'e',
//         sortBy: 'date',
//         startDate: undefined,
//         endDate: undefined
//     };
//     const result = selectExpenses(expenses, filters);
//     expect(result).toEqual([ expenses[2], expenses[1]]);

// });

// test('should filter by startDate', () => {
//     const filters = {
//         text: '',
//         sortBy: 'date',
//         startDate: moment(0),
//         endDate: undefined
//     }

//     const result = selectExpenses(expenses, filters);
//     expect(result).toEqual( [expenses[2], expenses[0]] );
// });

// test('should filter by endDate', () => {
//     const filters = {
//         text: '',
//         sortBy: 'date',
//         startDate: undefined,
//         endDate: moment(0).add(2, 'days')
//     };

//     const result = selectExpenses(expenses, filters);
//     expect(result).toEqual( [ expenses[0], expenses[1] ] );
// });

// test('should sort by date', () => {
//     const filters = {
//         text: '',
//         sortBy: 'date',
//         startDate: undefined,
//         endDate: undefined
//     }

//     const result = selectExpenses(expenses, filters);
//     expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
// });

// test('should sort by amount', () => {
//     const filters = {
//         text: '',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     };
//     const result= selectExpenses(expenses, filters);
//     expect(result).toEqual( [expenses[1], expenses[2], expenses[0] ]);
// });