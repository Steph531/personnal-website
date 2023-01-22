import { React } from "react";
import { Link } from 'react-router-dom';

function NavbarLink(props){


    return(
        <Link 
        className={`p-2 mx-2 block rounded-3xl text-center hover:bg-slate-500 transition duration-250 ${props.selected ? 'bg-slate-500' : ''}`}
        href=""
        to={props.to}>
            {props.text}</Link>
    )


}

export default NavbarLink;