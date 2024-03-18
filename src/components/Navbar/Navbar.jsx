import { useState } from "react";
import { Link } from "../Link/Link";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
export const Navbar = () => {
 const [open, setOpen] = useState(false)

    const routes = [
        { path: '/home', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/products', name: 'Products', id: 4 },
        { path: '/contact', name: 'Contact', id: 5 }
      ];


  return (
    <nav>
        <div className="text-2xl md:hidden"
         onClick={()=> setOpen(!open)}>
            {
                open === true ? <IoMdClose></IoMdClose> : <IoMenu></IoMenu>
            }
            
        </div>
        <ul className={`md:flex duration-1000 absolute  md:static
        ${open ? 'top-6': '-top-60'}
        bg-red-400 md:bg-white px-5 ml-5`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>

    </nav>
  )
}
