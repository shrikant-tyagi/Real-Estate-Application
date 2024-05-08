import './filter.scss';

const Filter = () => {
  return (
    <div className='filter'>
      <h1>Search Result for</h1>
      <div className='top'>
        <div className='item'>
          <label htmlFor='city'> Location </label>
          <input type='text' id='city' name='city' placeholder='City Location' />
        </div>
      </div>

      <div className='bottom'>

        <div className='item'>
          <label htmlFor='type'>Type</label>
          <select id='type' name='type'>
            <option value=''>Any</option>
            <option value='buy'>Buy</option>
            <option value='rent'>Rent</option>
          </select>
        </div>

        <div className='item'>
          <label htmlFor='property'>Property</label>
          <select id='property' name='property'>
            <option value=''>Any</option>
            <option value='house'>House</option>
            <option value='apartmant'>Apartment</option>
            <option value='condo'>Condo</option>
            <option value='land'>Land</option>
          </select>
        </div>

        <div className='item'>
          <label htmlFor='minPrice'>Min Price</label>
          <input id='minPrice' 
          type='number' 
          placeholder='Any'
          name='minPrice'>
          </input>
        </div>

        <div className='item'>
          <label htmlFor='maxPrice'>Max Price</label>
          <input id='maxnPrice' 
          type='number' 
          placeholder='Any'
          name='maxPrice'>
          </input>
        </div>

        <div className='item'>
          <label htmlFor='bedroom'>Bedroom</label>
          <input id='bedrooom' 
          type='number' 
          placeholder='Any'
          name='bedroom'>
          </input>
        </div>

        <button className=''>
          <img src='./search.png' alt=''/>
        </button>
      </div>
    </div>
  )
}

export default Filter