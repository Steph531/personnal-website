import { React } from "react";
import { Link } from 'react-router-dom';

function NavbarLink(props){


    return(
        <Link 
        className={`p-2 mx-2 block text-white text-center ${props.selected ? 'underline' : ''}`}
        href=""
        to={props.to}>
            {props.text}</Link>
    )


}

export default NavbarLink;