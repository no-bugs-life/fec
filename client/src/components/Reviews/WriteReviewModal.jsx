import React, {useState} from 'react';
import Stars from '../Stars/Stars.jsx'

const WriteReviewModal = ({show, productName, characteristics}) => {
  console.log(characteristics);
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
            <input type='radio' name='recommendation' value='Yes'/>Yes
            <input type='radio' name='recommendation' value='No'/>No
          </label>
          <br/>
          <label>
            <h5>Characteristics</h5>
            {characteristics.Size
            ? <> {'Size: '}
              <input type='radio' name='characteristics' value={1} />1
              <input type='radio' name='characteristics' value={2} />2
              <input type='radio' name='characteristics' value={3} />3
              <input type='radio' name='characteristics' value={4} />4
              <input type='radio' name='characteristics' value={5} />5
              <br/>
            </>
            : null}
            {characteristics.Width
            ? <> {'Width: '}
              <input type='radio' name='characteristics' value={1} />1
              <input type='radio' name='characteristics' value={2} />2
              <input type='radio' name='characteristics' value={3} />3
              <input type='radio' name='characteristics' value={4} />4
              <input type='radio' name='characteristics' value={5} />5
              <br/>
            </>
            : null}
            {characteristics.Comfort
            ? <> {'Comfort: '}
              <input type='radio' name='characteristics' value={1} />1
              <input type='radio' name='characteristics' value={2} />2
              <input type='radio' name='characteristics' value={3} />3
              <input type='radio' name='characteristics' value={4} />4
              <input type='radio' name='characteristics' value={5} />5
              <br/>
            </>
            : null}
            {characteristics.Quality
            ? <> {'Quality: '}
              <input type='radio' name='characteristics' value={1} />1
              <input type='radio' name='characteristics' value={2} />2
              <input type='radio' name='characteristics' value={3} />3
              <input type='radio' name='characteristics' value={4} />4
              <input type='radio' name='characteristics' value={5} />5
              <br/>
            </>
            : null}
            {characteristics.Length
            ? <> {'Length: '}
              <input type='radio' name='characteristics' value={1} />1
              <input type='radio' name='characteristics' value={2} />2
              <input type='radio' name='characteristics' value={3} />3
              <input type='radio' name='characteristics' value={4} />4
              <input type='radio' name='characteristics' value={5} />5
              <br/>
            </>
            : null}
            {characteristics.Fit
            ? <> {'Fit: '}
              <input type='radio' name='characteristics' value={1} />1
              <input type='radio' name='characteristics' value={2} />2
              <input type='radio' name='characteristics' value={3} />3
              <input type='radio' name='characteristics' value={4} />4
              <input type='radio' name='characteristics' value={5} />5
              <br/>
            </>
            : null}
          </label>
        </form>
      </div>
    </div>
  );
}

export default WriteReviewModal;