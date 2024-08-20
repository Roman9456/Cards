import PropTypes from 'prop-types';

function Card({ children }) {
  return (
    <div className='card mt-5' style={{width: 18 + 'rem'}}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Card