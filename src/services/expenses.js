import { ActionCreators } from "../app/expensesReducer";
// Responsible for making http requests e.g. getting/creating expenses.
// Reaching out to the API

export const GetExpenses = async (dispatch) => {
    try {
        // api calling
        const expenses = [
            { id: 1, description: 'Groceries', amount: 60.82},
            { id: 2, description: 'Rent', amount: 500},
            { id: 3, description: 'Bills', amount: 150},
        ];

        dispatch(ActionCreators.setExpenses(expenses));
    } catch {
        console.log('Error!')
    }
}


export const NewExpense = async (dispatch, expense) => {
    try{
    // api calling
    dispatch(ActionCreators.newExpense({id: 5, description: expense.description, 
        amount: expense.amount}));
    }catch {
        console.log('Error!');
    }
}

export const EditExpense = async (dispatch, expense) => {
    try {
        // api calling
        dispatch(ActionCreators.editExpense(expense));
    } catch {
        console.log('Error!')
    }
}

export const DeleteExpense = async (dispatch, expense) => {
    try {
        // api calling
        dispatch(ActionCreators.deleteExpense(expense));
    } catch {
        console.log('Error!')
    }
}