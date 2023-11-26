import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function PhotosPage() {
	const [photo, setPhoto] = useState([]);
	const {id} = useParams();
	
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
		.then(response => response.json())
		.then(data => setPhoto(data))
	}, [id]);
	
	return(
		<div className="list">
			<Link className="list__back" to={`/albums/${id}`}>go back</Link>
			<div className="list__title">Photos</div>
			<div className="list__wrapper">
				{
					photo.map(item => {
						return(
							<div className="list__item" key={item.id}>
								<img src={item.url} alt=""/>
							</div>
						)
					})
				}
			</div>
		</div>
	);
}