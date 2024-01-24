import { homeNavComponent, navComponent } from './navigation';
import locationComponent from './content';
import footerComponent from './footer';
import './style.css';

document.body.appendChild(navComponent());
document.body.appendChild(locationComponent());
document.body.appendChild(footerComponent());