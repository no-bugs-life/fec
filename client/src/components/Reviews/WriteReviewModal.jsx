import React, {useState} from 'react';
import Stars from '../Stars/Stars.jsx'

const WriteReviewModal = ({show, productName, characteristics}) => {

  const [rating, setRating] = useState(null);
  const [recommend, setRecommend] = useState(null);
  const [size, setSize] = useState(null);
  const [width, setWidth] = useState(null);
  const [comfort, setComfort] = useState(null);
  const [quality, setQuality] = useState(null);
  const [length, setLength] = useState(null);
  const [fit, setFit] = useState(null);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [photos, setPhotos] = useState([]);
  const [nickName, setNickName] = useState('');
  const [email, setEmail] = useState('');

  const postReview = () => {

  }

  const addPhoto = (e) => {
    e.preventDefault();
    let photosCopy = photos.slice()
    photosCopy.push(e.target.value);
    setPhotos(photosCopy);
  }

  return (
    <div className='modal'>
      <div>
        <h3>Write Your Review</h3>
        <h5>About the {productName}</h5>
      </div>
      <div>
        <form onSubmit={postReview}>
          <label>
            Overall Rating
            <Stars rating={0} tag={'writeReview'} size={'50px'}/>
          </label>
          <label>
            {'Do you recommend this product? '}
            <input type='radio' name='recommendation' value='Yes' onChange={() => setRecommend('Yes')}/>{'Yes '}
            <input type='radio' name='recommendation' value='No' onChange={() => setRecommend('No')}/>{'No'}
          </label>
          <br/>
          <label>
            <h5>Characteristics</h5>
            {characteristics.Size
            ? <> {'Size: '}
              <input type='radio' name='size' value={1} onChange={(e) => setSize(e.target.value)}/>1
              <input type='radio' name='size' value={2} onChange={(e) => setSize(e.target.value)}/>2
              <input type='radio' name='size' value={3} onChange={(e) => setSize(e.target.value)}/>3
              <input type='radio' name='size' value={4} onChange={(e) => setSize(e.target.value)}/>4
              <input type='radio' name='size' value={5} onChange={(e) => setSize(e.target.value)}/>5
              <br/>
            </>
            : null}
            {characteristics.Width
            ? <> {'Width: '}
              <input type='radio' name='width' value={1} onChange={(e) => setWidth(e.target.value)}/>1
              <input type='radio' name='width' value={2} onChange={(e) => setWidth(e.target.value)}/>2
              <input type='radio' name='width' value={3} onChange={(e) => setWidth(e.target.value)}/>3
              <input type='radio' name='width' value={4} onChange={(e) => setWidth(e.target.value)}/>4
              <input type='radio' name='width' value={5} onChange={(e) => setWidth(e.target.value)}/>5
              <br/>
            </>
            : null}
            {characteristics.Comfort
            ? <> {'Comfort: '}
              <input type='radio' name='comfort' value={1} onChange={(e) => setComfort(e.target.value)}/>1
              <input type='radio' name='comfort' value={2} onChange={(e) => setComfort(e.target.value)}/>2
              <input type='radio' name='comfort' value={3} onChange={(e) => setComfort(e.target.value)}/>3
              <input type='radio' name='comfort' value={4} onChange={(e) => setComfort(e.target.value)}/>4
              <input type='radio' name='comfort' value={5} onChange={(e) => setComfort(e.target.value)}/>5
              <br/>
            </>
            : null}
            {characteristics.Quality
            ? <> {'Quality: '}
              <input type='radio' name='quality' value={1} onChange={(e) => setQuality(e.target.value)}/>1
              <input type='radio' name='quality' value={2} onChange={(e) => setQuality(e.target.value)}/>2
              <input type='radio' name='quality' value={3} onChange={(e) => setQuality(e.target.value)}/>3
              <input type='radio' name='quality' value={4} onChange={(e) => setQuality(e.target.value)}/>4
              <input type='radio' name='quality' value={5} onChange={(e) => setQuality(e.target.value)}/>5
              <br/>
            </>
            : null}
            {characteristics.Length
            ? <> {'Length: '}
              <input type='radio' name='length' value={1} onChange={(e) => setLength(e.target.value)}/>1
              <input type='radio' name='length' value={2} onChange={(e) => setLength(e.target.value)}/>2
              <input type='radio' name='length' value={3} onChange={(e) => setLength(e.target.value)}/>3
              <input type='radio' name='length' value={4} onChange={(e) => setLength(e.target.value)}/>4
              <input type='radio' name='length' value={5} onChange={(e) => setLength(e.target.value)}/>5
              <br/>
            </>
            : null}
            {characteristics.Fit
            ? <> {'Fit: '}
              <input type='radio' name='fit' value={1} onChange={(e) => setFit(e.target.value)}/>1
              <input type='radio' name='fit' value={2} onChange={(e) => setFit(e.target.value)}/>2
              <input type='radio' name='fit' value={3} onChange={(e) => setFit(e.target.value)}/>3
              <input type='radio' name='fit' value={4} onChange={(e) => setFit(e.target.value)}/>4
              <input type='radio' name='fit' value={5} onChange={(e) => setFit(e.target.value)}/>5
              <br/>
            </>
            : null}
          </label>
          <label>
            {'Review Summary '}
            <input type='text' maxLength={60} placeholder='Example: Best purchase ever!' onChange={(e) => setSummary(e.target.value)}/>
          </label>
          <br/>
          <label>
            {'Review Body '}
            <input type='text' minLength={50} maxLength={1000} placeholder='Why did you like the product or not?' required onChange={(e) => setBody(e.target.value)}/>
            {'Character count portion goes here'}
          </label>
          <br/>
          <label>
            {'Add Photos '}
            {photos.length <= 5
            ? <input type='file' accept='.png, .jpg, .jpeg' multiple onChange={addPhoto}/>
            : null}
          </label>
          <br/>
          <label>
            {'Nickname '}
            <input type='text' maxLength={60} placeholder='Example: jackson11!' required onChange={(e) => setNickName(e.target.value)}/>
            <br/>
            {'For privacy reasons, do not use your full name or email address'}
          </label>
          <br/>
          <label>
            {'Email '}
            <input type='email' maxLength={60} placeholder='Example: jackson11@email.com' required onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            {'For authentication reasons, you will not be emailed'}
          </label>
          <br/>
          <input type='submit' value='Submit'/>
        </form>
      </div>
    </div>
  );
}

export default WriteReviewModal;