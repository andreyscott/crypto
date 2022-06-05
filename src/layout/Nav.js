import React from 'react'
import {
    BrowserRouter as Router,
    NavLink,
    Link
  } from "react-router-dom";

  //import softlogo.svg form assest folder
import logo from "../images/logo.svg";


export default function Header2() {

    let Links = [
        // {name: 'Home', link: '/'},
        {name: 'Asset Token', link: '/asset'},
        {name: 'Stablecoin', link: '/stablecoin'},
        {name: 'Community', link: '/community'},
        {name: 'Ecosystem', link: '/ecosystem'},
    ];

    const [isOpen, setIsOpen] = React.useState(false);

    const renderNavLink = ({ name, link }) => (
		<a className="my-1 p-2 text-md font-medium text-white transition-all duration-5000 ease-in-out transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
         key={link}>
			<NavLink
				exact
				to={link}
				activeClassName="text-primary dark:text-blue-400"
				className="dark:text-gray-700 hover:text-primary text-white"
			>
				{name}
			</NavLink>
		</a>
	);


  return (
    
    <nav className="bg-transparent shadow-md dark:bg-gray-800">
        <div className="container px-4 py-3 mx-auto md:mx-7 md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <div>
                    <Link to='/'  className=" ml-4 text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">
                        <img src={logo} className=" h-12  w-44" />
                    </Link>
                 
                </div>
                
                <div className="flex md:hidden">
                    <button type="button" onClick={ () => setIsOpen(!isOpen) }  className="text-white dark:text-gray-200 hover:text-primary dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 mr-3" aria-label="toggle menu">
                  {
                    isOpen ? (
    <ion-icon className="" name='close'></ion-icon> 

        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 rotate-0 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
</svg>
    )

                  }
            
                    
              
                    </button>
                </div>
            </div>

            <div className={`items-center md:flex ${ isOpen ? 'block' : 'hidden'}`}>
                <div className="flex flex-col md:flex-row md:mx-6 ">
                {Links.map((Links) => renderNavLink(Links))}
                    
                </div>

                

                <div className="flex justify-center md:block">
                    
                </div>
            </div>
        </div>
    </nav>
  )
}