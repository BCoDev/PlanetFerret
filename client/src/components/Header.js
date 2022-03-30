import { Link } from 'react-router-dom'

const Header = () => {
    return (
		<header>
			<h1><Link to="home" className="logo">Planet Ferret</Link></h1>
			<Link to="home">Ferrets are our Business</Link>
		</header>	
	)
}
export default Header