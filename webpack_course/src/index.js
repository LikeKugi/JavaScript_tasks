import Person from "./Person";
import "./css/style.css";
import img from "./img/new-webpack-dev-server.jpg";

const customer = new Person("name", 32, "Wakanda");
console.log(customer.introduce());

document.querySelector(".box-img img").src = img;
