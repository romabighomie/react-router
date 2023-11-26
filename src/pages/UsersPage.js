import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export default function UsersPage() {
	const [users, setUsers] = useState([]);
	
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => setUsers(data))
	}, []);
	
	return(
		<div className="list">
			<div className="list__title">Users</div>
			<div className="list__wrapper">
				{
					users.map(item => {
						return(
							<div className="list__item" key={item.id}>
								<div>{item.name}</div>
								<Link className="list__btn" to={`/albums/${item.id}`}>Albums</Link>
							</div>
						)
					})
				}
			</div>
		</div>
	);
}