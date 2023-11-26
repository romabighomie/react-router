import {Outlet} from 'react-router-dom';

export default function Layout() {
	return(
		<div className="page">
			<div className="header">header</div>
			
			<div className="main">
				<Outlet />
			</div>
			
			<div className="header">footer</div>
		</div>
	);
}