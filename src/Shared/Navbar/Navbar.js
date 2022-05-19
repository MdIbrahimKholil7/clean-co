import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const route = [
        { name: 'Home', to: '/' },
        { name: 'About', to: '/about' },
        { name: 'Service', to: '/service' },
        { name: 'Contact', to: '/contact' },
        { name: 'Login', to: '/login' },
    ]

    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />

            <div class="drawer-content flex flex-col">
                <div class="w-full navbar bg-base-100">
                    <div class="flex-1  text-3xl font-bold ">Clean Co</div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>

                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal gap-x-3">

                            {
                                route.map((element, index) => <li key={index}><NavLink
                                    to={element.to}
                                    className='rounded-lg'
                                >
                                    {element.name}</NavLink></li>)
                            }
                            <li><button class="btn btn-outline btn-primary rounded-lg">Book Now</button></li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here -->
                Content */}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                {
                                route.map((element, index) => <li key={index}><NavLink
                                    to={element.to}
                                    className='rounded-lg'
                                >
                                    {element.name}</NavLink></li>)
                            }
                            <li><button class="btn btn-outline btn-primary rounded-lg mt-4">Book Now</button></li>
                </ul>

            </div>
        </div>
    );
};

export default Navbar;