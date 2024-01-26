import { homeNavComponent, navComponent } from './navigation';
import { homeComponent, locationComponent, menuComponent } from './content';
import footerComponent from './footer';
import '../style.css';

document.body.appendChild(homeNavComponent());
document.body.appendChild(menuComponent());
document.body.appendChild(footerComponent());