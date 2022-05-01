import {navbar} from '../components/navbar.js';
import { banner } from '../components/banner.js';
import "../styles/navbar.css";
import "../styles/banner.css"
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar()

let banner_div = document.getElementById("banner");
banner_div.innerHTML = banner()