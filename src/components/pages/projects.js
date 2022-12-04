import WishList from './images/WishList.png';
import NoteTaker from './images/NoteTakerApp.png';
import BookRecos from './images/BookRecos.png';
import WeatherDashboard from './images/WeatherDashboard.png';

/* {title, imageUrl, ghLink, appLink} */
const projects = [
  {
    title: 'Wish List',
    imageUrl: WishList,
    ghLink:'https://github.com/AJManzione/wish-list',
    appLink: 'https://wish-list-maker.herokuapp.com/'
  },
  {
    title: 'Note Taker',
    imageUrl: NoteTaker,
    ghLink:'https://github.com/sbhikshe/Note-Taker-Application-PS',
    appLink: 'http://note-taker-application-ps.herokuapp.com/'
  },
  {
    title: 'Book Recos',
    imageUrl: BookRecos,
    ghLink:'https://github.com/sbhikshe/Book-Recos',
    appLink: 'https://sbhikshe.github.io/Book-Recos/'
  },
  {
    title: 'Weather Dashboard',
    imageUrl: WeatherDashboard,
    ghLink:'https://github.com/sbhikshe/A-Weather-Dashboard',
    appLink: 'https://sbhikshe.github.io/A-Weather-Dashboard/'
  },
];
export default projects;
