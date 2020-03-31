import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id, note }) => {
	return (
		<div>
			<Link to={`/edit/${id}`}>
				<h3>{description}</h3>
			</Link>
			<p>
				{amount} -- {createdAt}
			</p>
			{note && <p>note: {note}</p>}
		</div>
	);
};

export default ExpenseListItem;
