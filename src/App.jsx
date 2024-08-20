import classNames from 'classnames/bind';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const cardInfo = {
  title: 'Card text',
  img: 'https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd16.png',
  text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
  buttonStyle: 'primary',
  buttonText: 'Button text',
};

function App() {
  return (
    <div className='container'>
      <Card>
        <img src={cardInfo.img} className="card-img-top" alt="card picture" />
        <div className="card-body">
          <h5 className="card-title">{cardInfo.title}</h5>
          <p className="card-text">{cardInfo.text}</p>
          <a href="#" className={classNames('btn', `btn-${cardInfo.buttonStyle}`)}>{cardInfo.buttonText}</a>
        </div>
      </Card>
    </div>
  )
}

export default App