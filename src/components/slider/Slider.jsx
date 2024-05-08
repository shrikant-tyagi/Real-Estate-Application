import { useEffect, useState } from 'react';
import './slider.scss'
import { IoIosCloseCircleOutline } from "react-icons/io";


const Slider = ({images}) => {

  const [imageIdx , setImageidx] = useState(0);
  const [open , setOpen] = useState(false);

  const changeImage = (left=0) => {
    let length = images.length;

    if(left === 1){
      if(imageIdx == 0){
        setImageidx(length-1);
      }

      else{
        setImageidx((prev) => prev-1);
      }
    }

    else{
      if(imageIdx == length-1){
        setImageidx(0);
      }

      else setImageidx((prev) => prev+1);
    }
  }

  const closeHandler = () => {
    setOpen(false);
    setImageidx(0);
  }

  useEffect(() => {
    console.log(imageIdx);
  });

  return (
    <div className='slider'>
      <div className={open ? "fullSlider" : 'fullSlider close'}>
        <div className='arrow' onClick={() => changeImage(1)}>
          <img src='./arrow.png' alt=''/>
        </div>
        <div className='imageContainer'>
          <img src={images[imageIdx]} alt='' />
        </div>
        <div className='arrow right' onClick={changeImage}>
          <img src='./arrow.png' alt='' />
        </div>

        <div className='closeBtn' onClick={closeHandler}>
          <IoIosCloseCircleOutline size='3em'/>
        </div>
      </div>

      <div className='bigImage'>
        <img src={images[imageIdx]} alt='' onClick={() => setOpen(true)}/>
      </div>
      <div className='smallImage'>
        {
          images.slice(1).map((image , index) => {
            return <img src={image} key={index} onClick={() => setOpen(true)}/>
          })
        }
      </div>
    </div>
  )
}

export default Slider