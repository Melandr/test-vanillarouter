import "./style.css";
import Router from "./router/router";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

const section = document.querySelector("section");

const options = {
    type: "history",
    routes: {
        "/": "home",
        "/about": "about",
        "/products": "products",
    },
};

const router = new Router(options).listen().on("route", (e) => {
    const { route } = e.detail;

    switch (route) {
        case "home":
            section.innerHTML = Home();
            break;
        case "about":
            section.innerHTML = About();
            break;
        case "products":
            section.innerHTML = Products();
            break;

        default:
            // setRoute("home");
            section.innerHTML = Home();
            break;
    }
});

// router
//     .get("/about", (req, router) => {
//         section.innerHTML = About();
//         console.log(`Welcome to about page! The request url is ${req.uri}`);
//     })
//     .setName("about");

// router
//     .get("/products", (req, router) => {
//         section.innerHTML = Products();
//         console.log(router);
//     })
//     .setName("products");

// router.notFoundHandler(function (req, router) {
//     console.log("oops! the page you are looking for is probably eaten by a snake");
//     router.pathFor("home");
// });

// router.init();

// function homeCallback(req, router) {
//     section.innerHTML = Home();
//     console.log(`Welcome to my home page! The request url is ${req.uri}`);

//     window.query = req.query;
// }

// document.addEventListener("click", (event) => {
//     const { target } = event;

//     if (target instanceof HTMLAnchorElement) {
//         event.preventDefault();

//         router._goTo(target.href);
//         console.log(router);
//         console.log(window.Request.pathname);
//     }
// });

window.router = router;


