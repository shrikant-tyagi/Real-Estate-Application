import List from '../../components/list/List';
import './profile.scss';
import { listData } from '../../lib/dummydata';
import Chat from '../../components/chat/Chat';

const Profile = () => {
  return (
    <div className='profilePage'>
        <div className='details'>
            <div className='wrapper'>

                <div className='title'>
                    <h1>User Information</h1>
                    <button>Update Profile</button>
                </div>

                <div className='info'>
                    <span className='avatar'>
                        <span>Avatar : </span>
                        <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                        alt='' />
                    </span>
                    <span>Username : <b>John Doe</b></span>
                    <span>UserEmail : <b>doe@gmail.com</b></span>
                </div>

                <div className='title'>
                    <h1>My List</h1>
                    <button>Add New Post</button>
                </div>

                <List listData={listData}/>

                <div className='title'>
                    <h1>Saved List</h1>
                </div>

                <List listData={listData} />
            </div>
        </div>

        <div className='chatComponent'>
            <div className='wrapper'>
                <Chat />
            </div>
        </div>
    </div>
  )
}

export default Profile