import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="topnav">
            <NavLink /*activeClassName="active"*/ to={'/'}>Home</NavLink>
            <NavLink /*activeClassName="active"*/ to={"/event"}>Event</NavLink>
            <NavLink /*activeClassName="active"*/ to={"/todo"}>Todo</NavLink>
            <NavLink /*activeClassName="active"*/ to={"/covid"}>Covid</NavLink>
        </div>
    )
}

export default Nav;