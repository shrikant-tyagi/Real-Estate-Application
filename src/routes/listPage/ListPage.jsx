import Card from "../../components/card/Card"
import {listData} from '../../lib/dummydata'
import Filter from "../../components/filter/Filter"
import './listPage.scss'
import Map from "../../components/map/Map"

const ListPage = () => {
  return (
    <div className='listPage'>
      <div className='listContainer'>
        <div className='wrapper'>
          <Filter />
          {
            listData.map((item)=>{
              return <Card item={item} key={item.id}/>
            })
          }
        </div>
      </div>
      <div className='mapContainer'>
          <Map items={listData}/>
      </div>
    </div>
  )
}

export default ListPage