import './list.scss';
import Card from '../card/Card'

const List = ({listData}) => {
  return (
    <div className='list'>
        {
            listData.map((item) => {
                return <Card item={item} />
            })
        }
    </div>
  )
}

export default List