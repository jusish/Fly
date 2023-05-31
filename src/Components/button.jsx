import React from 'react';
import './button.css';
import { BiChevronUp } from "react-icons/bi";

function MoveToTopButton() {
    const handleMoveToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
        <div>
      <button className="move-to-top-button" onClick={handleMoveToTop}>
        <BiChevronUp className='up' />
      </button>
      </div>
    );
  }
  
  export default MoveToTopButton;
  