import Slider from '../../components/slider/Slider';
import './singlePage.scss';
import { singlePostData ,userData} from '../../lib/dummydata';
import Map from '../../components/map/Map';

const SinglePage = () => {
  return (
    <div className='singlePage'>
      <div className='details'>
        <div className='wrapper'>
          <Slider images={singlePostData.images}/>

          <div className='info'>
            <div className='top'>

              <div className='post'>
                <h1>{singlePostData.title}</h1>
                <div className='address'>
                  <img src='/pin.png' alt='' />
                  <span>{singlePostData.address}</span>
                </div>
                <div className='price'>${singlePostData.price}</div>
              </div>

              <div className='user'>
                <img src={userData.img} alt=''/>
                <span>{userData.name}</span>
              </div>

            </div>
            <div className='bottom'>
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>

      <div className='features'>
        <div className='wrapper'>

            <div className='general'>
              <h2>General</h2>
              <div className='verticalContainer'>
                <div className='info'>
                  <img src='./utility.png'/>
                  <div>
                    <h3>Utilities</h3>
                    <p>Renter is responsible</p>
                  </div>
                </div>
                <div className='info'>
                  <img src='./pet.png'/>
                  <div>
                    <h3>Pet Policy</h3>
                    <p>Pets Allowed</p>
                  </div>
                </div>
                <div className='info'>
                  <img src='./fee.png'/>
                  <div>
                    <h3>Property Fees</h3>
                    <p>Must have 3x the rent in total household income</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='roomsize'>
              <h2>Room Sizes</h2>
              <div className='horizontalContainer'>
                <div className='info'>
                  <img src='./size.png' alt='' />
                  <span>80sqm (861sqft)</span>
                </div>
                <div className='info'>
                  <img src='./bed.png' alt='' />
                  <span>2 bed</span>
                </div>
                <div className='info'>
                  <img src='./bath.png' alt='' />
                  <span>1 bathroom</span>
                </div>
              </div>
            </div>

            <div className='nearby'>
              <h2>Nearby Places</h2>
              <div className='horizontalContainer'>
                <div className='info'>
                  <img src='./school.png'/>
                  <div>
                    <h3>School</h3>
                    <p>250m away</p>
                  </div>
                </div>

                <div className='info'>
                  <img src='./bus.png'/>
                  <div>
                    <h3>Bus Stop</h3>
                    <p>100m away</p>
                  </div>
                </div>

                <div className='info'>
                  <img src='./restaurant.png'/>
                  <div>
                    <h3>Restaurant</h3>
                    <p>200m away</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='location'>
              <h2>Location</h2>
              <div className='mapContainer'>
                <Map items={[singlePostData]} />
              </div>
            </div>

            <div className='buttons'>
              <button>
                <img src='./chat.png' />
                <span>Send a Message</span>
              </button>
              <button>
                <img src='./save.png' />
                <span>Save the Place</span>
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage