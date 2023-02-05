import React, {useState} from 'react';
import Stars from '../Stars/Stars.jsx'
import axios from 'axios';

const WriteReviewModal = ({setWriteReview, productName, characteristics, product_id}) => {

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
    if (size) {
      newCharacteristics["14"] = parseInt(size);
    }
    if (width) {
      newCharacteristics["15"] = parseInt(width);
    }
    if (comfort) {
      newCharacteristics["16"] = parseInt(comfort);
    }
    if (quality) {
      newCharacteristics["17"] = parseInt(quality);
    }
    if (length) {
      newCharacteristics["18"] = parseInt(length);
    }
    if (fit) {
      newCharacteristics["19"] = parseInt(fit);
    }
    postObj.characteristics = newCharacteristics;
    axios.post('http://localhost:3000/api/reviews/', postObj)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
    setWriteReview(false);
  }

  const receivePhoto = (e) => {
    e.preventDefault();
    const selectedFile = document.getElementById('photosInput').files[0];
    getBase64(selectedFile);
    // photosCopy.push(e.target.value);
    // console.log(photosCopy);
    //setPhotos(photosCopy);
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

  return (
    <div className='modal'>
      <div>
        <h3>Write Your Review</h3>
        <h5>About the {productName}</h5>
      </div>
      <div>
        <form onSubmit={postReview}>
          <label>
            Overall Rating*
            <Stars rating={rating} tag={'writeReview'} size={'50px'} setNewRating={setNewRating}/>
            {rating === 1 ? 'Poor'
            : rating === 2 ? 'Fair'
            : rating === 3 ? 'Average'
            : rating === 4 ? 'Good'
            : rating === 5 ? 'Great'
            : null}
          </label>
          <br/>
          <label>
            {'Do you recommend this product?* '}
            <input type='radio' name='recommendation' value='Yes' onChange={() => setRecommend(true)}/>{'Yes '}
            <input type='radio' name='recommendation' value='No' onChange={() => setRecommend(false)}/>{'No'}
          </label>
          <br/>
          <label>
            <h5>Characteristics*</h5>
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
            {'Review Body* '}
            <input type='text' minLength={50} maxLength={1000} id='reviewBody' placeholder='Why did you like the product or not?' required onChange={(e) => setBody(e.target.value)}/>
            {body.length <= 50
            ? <p>Minimum required characters left: {50 - body.length}</p>
            : null}
          </label>
          <br/>
          <label>
            {'Add Photos '}
            {photos.length <= 5
            ? <input type='file' id='photosInput' accept='.png, .jpg' multiple onChange={receivePhoto} />
            : null}
          </label>
          <br/>
          {photos.map((photo, idx) =>
            <img src={photo} alt={'Photo Unavailable'}  height={100} width={100} key={idx}/>
          )}
          <br/>
          <label>
            {'Nickname* '}
            <input type='text' maxLength={60} placeholder='Example: jackson11!' required onChange={(e) => setNickName(e.target.value)}/>
            <br/>
            {'For privacy reasons, do not use your full name or email address'}
          </label>
          <br/>
          <label>
            {'Email* '}
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