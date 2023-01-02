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
    const { route } = e;

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

// window.router = router;
