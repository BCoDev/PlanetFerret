import { Link } from 'react-router-dom'

const Header = () => {
    return (
		<header>
			<h1><Link to="/" className="logo">Planet Ferret</Link></h1>
			<Link to="/">Ferrets are our Business</Link>
		</header>	
	)
}
export default Header