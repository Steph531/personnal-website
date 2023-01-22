import { useState } from "react";
import NavbarLink from  './NavbarLink.tsx';

function Navbar(props){
    const [expended, setExpended] = useState(true);

    return(
        <nav className="flex sm:flex-row flex-col justify-center">
            <div className="cursor-pointer" onClick={() => setExpended(!expended)}>
                
            <svg className="sm:hidden m-2 w-[20px] h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
            </div>

            <div className={`transition-height duration-300 overflow-hidden flex sm:flex-row flex-col ${expended? 'h-30':'h-0'}`}>

                <NavbarLink to="/" selected='true' text="Stephen Fafournoux"></NavbarLink>
                <NavbarLink to="/mes-projets" text="Mes projets"></NavbarLink>
                <NavbarLink to="/mes-projets" text="Contact"></NavbarLink>
            </div>
        </nav>
    )


}

export default Navbar;