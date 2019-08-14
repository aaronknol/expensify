// Export stateless functional component
// description, amount, createdAt

import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt}) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
            </Link>
            
            <p>Amount: 
                {numeral(amount/100).format('$0,0.00')}
                - 
                {moment(createdAt).format('Do MMMM YYYY')}
            </p>
            <p>Created: {description}</p>

           
        </div>
    );
};

export default ExpenseListItem;