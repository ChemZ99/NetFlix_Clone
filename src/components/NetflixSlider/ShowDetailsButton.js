import React from 'react';
import IconArrowDown from './../Icons/IconArrowDown'
import './ShowDetailsButton.scss'
import { Button } from 'react-bootstrap';
import { ChevronDown, Dot, HandThumbsUp, PlayFill, Plus } from 'react-bootstrap-icons';

const ShowDetailsButton = ({ onClick }) => (
  <button onClick={onClick} className="show-details-button">
    <div>
      <div className='d-flex justify-content-between'>
        <div>
          <Button variant="light" size="sm" className='rounded-circle'><PlayFill/></Button>
          <Button variant="secondary" size="sm" className='rounded-circle'><Plus/></Button>
          <Button variant="secondary" size="sm" className='rounded-circle'><HandThumbsUp/></Button>
          </div>
          <div>
            <Button variant="secondary" size="sm" className='rounded-circle'><ChevronDown/></Button>
            </div>
            </div>
            <p><span className='text-success fw-bold d-inline'>92% Match</span> <span className='border border-4 border-secondary d-inline'>18+</span> <span className='d-inline'>Limited Series</span> <span className='border border-4 border-secondary d-inline'>HD</span></p> 
            <p><span className='d-inline'>Offbeat</span><Dot/><span className='d-inline'>Psychological</span><Dot/><span className='d-inline'>Dark Comedy</span></p>
            </div>
  </button>
);

export default ShowDetailsButton;
