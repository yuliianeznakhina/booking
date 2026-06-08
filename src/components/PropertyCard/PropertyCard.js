import './PropertyCard.css'

export function PropertyCard(props) {
  return (<div className='PropertyCardWrapper'>
    <button className='favoriteBTN'>
      <svg className='filled'>
        <path d="M22 8.688c-.043-4.41-4.738-7.196-8.644-4.817A6.4 6.4 0 0 0 12 5c-.365-.4-.82-.815-1.356-1.142C6.82 1.524 1.977 4.24 2 8.688c.015 2.873 1.4 5.457 3.365 7.498 1.797 1.865 4.056 3.397 6.117 4.668a1 1 0 0 0 1.052-.001c2.04-1.266 4.312-2.81 6.12-4.682 1.98-2.05 3.373-4.639 3.346-7.483" />
      </svg>
      <svg className='outlined'>
        <path fill-rule="evenodd" d="M13.356 3.871c3.906-2.379 8.601.407 8.644 4.817.027 2.844-1.367 5.433-3.346 7.483-1.808 1.873-4.08 3.416-6.12 4.682a1 1 0 0 1-1.052.001c-2.061-1.271-4.32-2.803-6.117-4.668C3.399 14.146 2.015 11.56 2 8.688c-.023-4.448 4.819-7.164 8.644-4.83.537.327.991.743 1.356 1.142a6.4 6.4 0 0 1 1.356-1.129M20 8.708c-.028-2.912-3.067-4.673-5.604-3.128-.408.248-.754.602-1.151 1.065a1 1 0 0 1-.76.349h-.961a1 1 0 0 1-.76-.35c-.401-.47-.75-.828-1.162-1.08C7.098 4.038 3.985 5.815 4 8.679c.011 2.214 1.081 4.33 2.805 6.12 1.477 1.533 3.343 2.855 5.2 4.026 1.844-1.169 3.722-2.502 5.21-4.042C18.96 12.975 20.02 10.865 20 8.708" clip-rule="evenodd" />
      </svg>
    </button>
    <div className='PropertyCard'>
      <div className='image'>
        <img src={props.image} />
      </div>
      <div className='information'>
        <div>
          <h4>{props.title}</h4>
          <h5>{props.bedrooms} bedrooms</h5>
        </div>
        <div>
          <div className='reviews'>
            <span>{props.rating}</span>
            <h5>{props.reviews} reviews</h5>
          </div>
          <div className='price'>
            <h3>${props.price}</h3>
            <p>{props.fees}</p>
            <p>{props.dateStart} - {props.dateEnd}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}