import Login from "../../Shared/Form/Login";
import Register from "../../Shared/Form/Register";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Home from "../Page/Home";
import Service from "../Page/Service";



    const publicRoutes=[
        {name:'Home',path:'/',Component:Home},
        {name:'About',path:'/about',Component:About},
        {name:'Service',path:'/service',Component:Service},
        {name:'Contact',path:'/contact',Component:Contact},
        {name:'Login',path:'/Login',Component:Login},
        {name:'Register',path:'/register',Component:Register},

    ]


export {publicRoutes}