import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function AlbumsPage() {
	const [album, setAlbum] = useState([]);
	const {id} = useParams();
	
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
		.then(response => response.json())
		.then(data => setAlbum(data))
	}, [id]);
	
	return(
		<div className="list">
			<Link className="list__back" to="/">go back</Link>
			<div className="list__title">Albums</div>
			<div className="list__wrapper">
				{
					album.map(item => {
						return(
							<div className="list__item" key={item.id}>
								<div>Album {item.title}</div>
								<Link className="list__btn" to={`/photos/${item.userId}`}>Photos</Link>
							</div>
						)
					})
				}
			</div>
		</div>
	);
}