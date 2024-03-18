import { Link } from "../Link/Link";

export const Navbar = () => {
    const routes = [
        { path: '/home', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/products', name: 'Products', id: 4 },
        { path: '/contact', name: 'Contact', id: 5 }
      ];


  return (
    <div>
        <ul>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
        </ul>

    </div>
  )
}
