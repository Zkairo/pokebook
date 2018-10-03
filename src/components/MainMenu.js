import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const MainMenu = () => {
    return (
        <nav>
            <Link to="/"><FaHome/></Link>
            <Link to="about"
            	  activeStyle={{
            	  backgroundColor: "white",
            	  color: "slategray"
            	}}>
            	About
            </Link>
            <Link to="members"
            	  activeStyle={{
            	  	backgroundColor: "white",
            	  	color: "slategray"
            	  }}>
            	  Members
           	</Link>
        </nav>
    )
}

export default MainMenu
