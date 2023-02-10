import React, {useState, useEffect} from 'react';
import Stars from '../Stars/Stars.jsx'
import axios from 'axios';
import ReactDom from 'react-dom';
import '../../css/Reviews/modalStyles.css'

const WriteReviewModal = ({setWriteReview, productName, characteristics, product_id, charIds}) => {

  const [rating, setRating] = useState(0);
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
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, [])

  const postReview = (e) => {
    e.preventDefault();
    let postObj = {
      "product_id": product_id,
      "rating": rating,
      "recommend": recommend,
      "summary": summary,
      "body": body,
      "photos": photos,
      "name": nickName,
      "email": email
    };
    let newCharacteristics = {};
    let charIdIdx = 0;
    if (size) {
      newCharacteristics[charIds[charIdIdx.toString()]] = parseInt(size);
      charIdIdx++;
    }
    if (width) {
      newCharacteristics[charIds[charIdIdx.toString()]] = parseInt(width);
      charIdIdx++;
    }
    if (comfort) {
      newCharacteristics[charIds[charIdIdx.toString()]] = parseInt(comfort);
      charIdIdx++;
    }
    if (quality) {
      newCharacteristics[charIds[charIdIdx.toString()]] = parseInt(quality);
      charIdIdx++;
    }
    if (length) {
      newCharacteristics[charIds[charIdIdx.toString()]] = parseInt(length);
      charIdIdx++;
    }
    if (fit) {
      newCharacteristics[charIds[charIdIdx.toString()]] = parseInt(fit);
    }
    postObj.characteristics = newCharacteristics;
    if (rating === 0) {
      alert('Please add a rating for the product')
    } else {
      axios.post('/api/reviews', postObj)
      .then((res) => null)
      .catch((err) => console.log(err));
      setWriteReview(false);
      document.body.style.overflowY = 'visible';
    }
  }

  const receivePhoto = (e) => {
    e.preventDefault();
    const selectedFile = document.getElementById('photosInput').files[0];
    getBase64(selectedFile);
  }

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //console.log(reader.result);
      sendToApi(reader.result.replace('data:', '')
      .replace(/^.+,/, ''));
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  const sendToApi = (base64Img) => {
    let form = new FormData();
    form.append("image", base64Img);
    axios.post('https://api.imgbb.com/1/upload?key=dd9bb00ace03cceb9b4d7d8f33bb5c8c', form)
    .then((res) => {
      let photosCopy = photos.slice();
      console.log(res);
      photosCopy.push(res.data.data.url);
      setPhotos(photosCopy);
    })
    .catch((err) => console.log(err))
  }

  const setNewRating = (index) => {
    setRating(index);
  }

  const closeWriteReview = () => {
    setWriteReview(false)
    document.body.style.overflowY = 'visible';
  }

  return domReady
    ? ReactDom.createPortal(
    <div>
      <div className='write-review-background'/>
      <div className='write-review'>
        <button className='close-modal-btn' onClick={closeWriteReview}>X</button>
        <div className='write-review-header'>
          <h2>Write Your Review</h2>
          <h4>About the {productName}</h4>
        </div>
        <div>
          <form onSubmit={postReview}>
            <label>
              Overall Rating*
              <Stars rating={rating} tag={'writeReview'} size={'30px'} setNewRating={setNewRating}/>
              {rating === 1 ? ' Poor'
              : rating === 2 ? ' Fair'
              : rating === 3 ? ' Average'
              : rating === 4 ? ' Good'
              : rating === 5 ? ' Great'
              : null}
            </label>
            <br/>
            <label>
              {'Do you recommend this product?* '}
              <input type='radio' name='recommendation' value='Yes' onChange={() => setRecommend(true)} required/>{'Yes '}
              <input type='radio' name='recommendation' value='No' onChange={() => setRecommend(false)}/>{'No'}
            </label>
            <br/>
            <h4>Characteristics*</h4>
            <label>
              {characteristics.Size
              ? <> {'Size: '}
                {size === null
                ? 'none selected'
                : size === '1'
                ? 'A size too small'
                : size === '2'
                ? '1/2 a size too small'
                : size === '3'
                ? 'Perfect'
                : size === '4'
                ? '1/2 a size too big'
                : size === '5'
                ? 'A size too wide'
                : null}
                <br/>
                <input type='radio' name='size' value={1} className='char-btn' onChange={(e) => setSize(e.target.value)} required/>1
                <input type='radio' name='size' value={2} className='char-btn' onChange={(e) => setSize(e.target.value)}/>2
                <input type='radio' name='size' value={3} className='char-btn' onChange={(e) => setSize(e.target.value)}/>3
                <input type='radio' name='size' value={4} className='char-btn' onChange={(e) => setSize(e.target.value)}/>4
                <input type='radio' name='size' value={5} className='char-btn' onChange={(e) => setSize(e.target.value)}/>5
                <br/>
                <div className='char-btn-labels'>
                  <small>A size too small</small>
                  <small>A size too wide</small>
                </div>
              </>
              : null}
            </label>
            <label>
              {characteristics.Width
              ? <> {'Width: '}
                {width === null
                ? 'none selected'
                : width === '1'
                ? 'Too narrow'
                : width === '2'
                ? 'Slightly narrow'
                : width === '3'
                ? 'Perfect'
                : width === '4'
                ? 'Slightly wide'
                : width === '5'
                ? 'Too wide'
                : null}
                <br/>
                <input type='radio' name='width' value={1} className='char-btn' onChange={(e) => setWidth(e.target.value)} required/>1
                <input type='radio' name='width' value={2} className='char-btn' onChange={(e) => setWidth(e.target.value)}/>2
                <input type='radio' name='width' value={3} className='char-btn' onChange={(e) => setWidth(e.target.value)}/>3
                <input type='radio' name='width' value={4} className='char-btn' onChange={(e) => setWidth(e.target.value)}/>4
                <input type='radio' name='width' value={5} className='char-btn' onChange={(e) => setWidth(e.target.value)}/>5
                <br/>
                <div className='char-btn-labels'>
                  <small>Too narrow</small>
                  <small>Too wide</small>
                </div>
              </>
              : null}
            </label>
            <label>
              {characteristics.Comfort
              ? <> {'Comfort: '}
                {comfort === null
                ? 'none selected'
                : comfort === '1'
                ? 'Uncomfortable'
                : comfort === '2'
                ? 'Slightly uncomfortable'
                : comfort === '3'
                ? 'Ok'
                : comfort === '4'
                ? 'Comfortable'
                : comfort === '5'
                ? 'Perfect'
                : null}
                <br/>
                <input type='radio' name='comfort' value={1} className='char-btn' id='comfort1' onChange={(e) => setComfort(e.target.value)} required/>1
                <input type='radio' name='comfort' value={2} className='char-btn' onChange={(e) => setComfort(e.target.value)}/>2
                <input type='radio' name='comfort' value={3} className='char-btn' onChange={(e) => setComfort(e.target.value)}/>3
                <input type='radio' name='comfort' value={4} className='char-btn' onChange={(e) => setComfort(e.target.value)}/>4
                <input type='radio' name='comfort' value={5} className='char-btn' onChange={(e) => setComfort(e.target.value)}/>5
                <br/>
                <div className='char-btn-labels'>
                  <small>Uncomfortable</small>
                  <small>Perfect</small>
                </div>
              </>
              : null}
            </label>
            <label>
              {characteristics.Quality
              ? <> {'Quality: '}
                {quality === null
                ? 'none selected'
                : quality === '1'
                ? 'Poor'
                : quality === '2'
                ? 'Below average'
                : quality === '3'
                ? 'What I expected'
                : quality === '4'
                ? 'Pretty great'
                : quality === '5'
                ? 'Perfect'
                : null}
                <br/>
                <input type='radio' name='quality' value={1} className='char-btn' onChange={(e) => setQuality(e.target.value)} required/>1
                <input type='radio' name='quality' value={2} className='char-btn' onChange={(e) => setQuality(e.target.value)}/>2
                <input type='radio' name='quality' value={3} className='char-btn' onChange={(e) => setQuality(e.target.value)}/>3
                <input type='radio' name='quality' value={4} className='char-btn' onChange={(e) => setQuality(e.target.value)}/>4
                <input type='radio' name='quality' value={5} className='char-btn' onChange={(e) => setQuality(e.target.value)}/>5
                <br/>
                <div className='char-btn-labels'>
                  <small>Poor</small>
                  <small>Perfect</small>
                </div>
              </>
              : null}
            </label>
            <label>
              {characteristics.Length
              ? <> {'Length: '}
                {length === null
                ? 'none selected'
                : length === '1'
                ? 'Runs short'
                : length === '2'
                ? 'Runs slightly short'
                : length === '3'
                ? 'Perfect'
                : length === '4'
                ? 'Runs slightly long'
                : length === '5'
                ? 'Runs long'
                : null}
                <br/>
                <input type='radio' name='length' value={1} className='char-btn' onChange={(e) => setLength(e.target.value)} required/>1
                <input type='radio' name='length' value={2} className='char-btn' onChange={(e) => setLength(e.target.value)}/>2
                <input type='radio' name='length' value={3} className='char-btn' onChange={(e) => setLength(e.target.value)}/>3
                <input type='radio' name='length' value={4} className='char-btn' onChange={(e) => setLength(e.target.value)}/>4
                <input type='radio' name='length' value={5} className='char-btn' onChange={(e) => setLength(e.target.value)}/>5
                <br/>
                <div className='char-btn-labels'>
                  <small>Runs short</small>
                  <small>Runs long</small>
                </div>
              </>
              : null}
            </label>
            <label>
              {characteristics.Fit
              ? <> {'Fit: '}
                {fit === null
                ? 'none selected'
                : fit === '1'
                ? 'Runs tight'
                : fit === '2'
                ? 'Runs slightly tight'
                : fit === '3'
                ? 'Perfect'
                : fit === '4'
                ? 'Runs slightly long'
                : fit === '5'
                ? 'Runs long'
                : null}
                <br/>
                <input type='radio' name='fit' value={1} className='char-btn' onChange={(e) => setFit(e.target.value)} required/>1
                <input type='radio' name='fit' value={2} className='char-btn' onChange={(e) => setFit(e.target.value)}/>2
                <input type='radio' name='fit' value={3} className='char-btn' onChange={(e) => setFit(e.target.value)}/>3
                <input type='radio' name='fit' value={4} className='char-btn' onChange={(e) => setFit(e.target.value)}/>4
                <input type='radio' name='fit' value={5} className='char-btn' onChange={(e) => setFit(e.target.value)}/>5
                <br/>
                <div className='char-btn-labels'>
                  <small>Runs tight</small>
                  <small>Runs long</small>
                </div>
              </>
              : null}
            </label>
            <label>
              {'Review Summary '}
              <input type='text' maxLength={60} placeholder='Example: Best purchase ever!' size={30} onChange={(e) => setSummary(e.target.value)}/>
            </label>
            <br/>
            <div className='write-modal-body'>
              <label>
              {'Review Body* '}
              </label>
              <textarea minLength={50} maxLength={1000} rows='3' cols='40'placeholder='Why did you like the product or not?' required onChange={(e) => setBody(e.target.value)}/>
            </div>
            {body.length <= 50
              ? <small className='min-char'>Minimum required characters left: {50 - body.length}</small>
              : null}
            <br/>
            <label>
              {'Add Photos '}
              {photos.length <= 5
              ? <input type='file' id='photosInput' accept='.png, .jpg' multiple onChange={receivePhoto} />
              : null}
            </label>
            <br/>
            {photos.map((photo, idx) =>
              <img src={photo} alt={'Photo Unavailable'} className='write-review-photo' key={idx}/>
            )}
            <br/>
            <label>
              {'Nickname* '}
              <input type='text' maxLength={60} size={20} placeholder='Example: jackson11!' required onChange={(e) => setNickName(e.target.value)}/>
              <br/>
              <small>For privacy reasons, do not use your full name or email address</small>
            </label>
            <br/>
            <label>
              {'Email* '}
              <input type='email' maxLength={60} size={30} placeholder='Example: jackson11@email.com' required onChange={(e) => setEmail(e.target.value)}/>
              <br/>
              <small>For authentication reasons, you will not be emailed</small>
            </label>
            <br/>
            <input type='submit' value='Submit'/>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
  : null
}

export default WriteReviewModal;