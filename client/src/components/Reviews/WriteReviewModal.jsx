import React, {useState} from 'react';
import Stars from '../Stars/Stars.jsx'

const WriteReviewModal = ({show, productName, characteristics}) => {

  const [recommend, setRecommend] = useState(null);

  const postReview = () => {

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
              <input type='radio' name='size' value={1} />1
              <input type='radio' name='size' value={2} />2
              <input type='radio' name='size' value={3} />3
              <input type='radio' name='size' value={4} />4
              <input type='radio' name='size' value={5} />5
              <br/>
            </>
            : null}
            {characteristics.Width
            ? <> {'Width: '}
              <input type='radio' name='width' value={1} />1
              <input type='radio' name='width' value={2} />2
              <input type='radio' name='width' value={3} />3
              <input type='radio' name='width' value={4} />4
              <input type='radio' name='width' value={5} />5
              <br/>
            </>
            : null}
            {characteristics.Comfort
            ? <> {'Comfort: '}
              <input type='radio' name='comfort' value={1} />1
              <input type='radio' name='comfort' value={2} />2
              <input type='radio' name='comfort' value={3} />3
              <input type='radio' name='comfort' value={4} />4
              <input type='radio' name='comfort' value={5} />5
              <br/>
            </>
            : null}
            {characteristics.Quality
            ? <> {'Quality: '}
              <input type='radio' name='quality' value={1} />1
              <input type='radio' name='quality' value={2} />2
              <input type='radio' name='quality' value={3} />3
              <input type='radio' name='quality' value={4} />4
              <input type='radio' name='quality' value={5} />5
              <br/>
            </>
            : null}
            {characteristics.Length
            ? <> {'Length: '}
              <input type='radio' name='length' value={1} />1
              <input type='radio' name='length' value={2} />2
              <input type='radio' name='length' value={3} />3
              <input type='radio' name='length' value={4} />4
              <input type='radio' name='length' value={5} />5
              <br/>
            </>
            : null}
            {characteristics.Fit
            ? <> {'Fit: '}
              <input type='radio' name='fit' value={1} />1
              <input type='radio' name='fit' value={2} />2
              <input type='radio' name='fit' value={3} />3
              <input type='radio' name='fit' value={4} />4
              <input type='radio' name='fit' value={5} />5
              <br/>
            </>
            : null}
          </label>
          <label>
            {'Review Summary '}
            <input type='text' maxLength={60} placeholder='Example: Best purchase ever!'/>
          </label>
          <br/>
          <label>
            {'Review Body '}
            <input type='text' minLength={50} maxLength={1000} placeholder='Why did you like the product or not?' required/>
            {'Character count portion goes here'}
          </label>
          <br/>
          {'ADD PHOTOS SECTION HERE'}
          <br/>
          <label>
            {'Nickname '}
            <input type='text' maxLength={60} placeholder='Example: jackson11!' required/>
            <br/>
            {'For privacy reasons, do not use your full name or email address'}
          </label>
          <br/>
          <label>
            {'Email '}
            <input type='email' maxLength={60} placeholder='Example: jackson11@email.com' required/>
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