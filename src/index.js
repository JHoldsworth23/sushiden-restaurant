import { homeNavComponent, navComponent } from './navigation';
import bodyComponent from './content';
import footerComponent from './footer';
import './style.css';

document.body.appendChild(navComponent());
document.body.appendChild(bodyComponent());
document.body.appendChild(footerComponent());