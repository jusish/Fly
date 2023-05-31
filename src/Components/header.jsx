import airport from '../assets/airport.jpg'
import plane from '../assets/plane-PhotoRoom 1.png'
import { Link } from "react-router-dom";
import "./header.css";
import { AiOutlineArrowRight } from 'react-icons/ai';

function Header() {
  return (
    <div className='head'>
        <img src={airport} alt="airport" className='airport' />
        <img src={plane} alt="aeroplane" className='plane' />
        <div className="fly">
           <p> Fly High with us throughout different directions of the world</p>
        </div>
        <Link id="book" to="/about">
       Book your flight now <AiOutlineArrowRight id='next' />
        </Link>
    </div>
  )
}

export default Header