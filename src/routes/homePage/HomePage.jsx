import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/searchBar/SearchBar'

const HomePage = () => {
  return (
    <div className='homePage'>
       <div className='textContainer'>
        <div className='wrapper'>
            <h1 className='title'>
                Find Real Estate and get your dream place
            </h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis placerat ex, nec posuere tortor. 
                Etiam eu dui non dolor tempus semper id vitae nisi. Praesent feugiat feugiat erat ut placerat. Vestibulum tincidunt,
                quam a varius varius, dolor lacus sodales massa, eu euismod enim elit et massa. Mauris ac magna eros.
            </p>
            <SearchBar />
            <div className='boxes'>
                <div className='box'>
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                </div>
                <div className='box'>
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className='box'>
                    <h1>1200+</h1>
                    <h2>Property ready</h2>
                </div>
            </div>
        </div>
       </div>
       <div className='imageContainer'>
        <img src='./bg.png'/>
       </div>
    </div>
  )
}

export default HomePage