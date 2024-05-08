import './chat.scss';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from 'react';

const Chat = () => {

    const [chat , setChat] = useState(true);

  return (
    <div className='chat'>
        <div className='messageContainer'>
            <h1>Messages</h1>
            <div className='messages'>
                <div className='message'>
                    <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
                    <span> John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className='message'>
                    <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
                    <span> John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className='message'>
                    <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
                    <span> John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className='message'>
                    <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
                    <span> John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className='message'>
                    <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt=''/>
                    <span> John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
            </div>
        </div>

       {
        chat && 
        <div className='chatbox'>
            <div className='top'>
                <div className='user'>
                    <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                    <b>John Doe</b>
                </div>
                <span className='close' onClick={() => setChat(prev => !prev)}>
                    <IoIosCloseCircleOutline size='2em'/>
                </span>
            </div>

            <div className='center'>
                <div className='chatMessage'>
                    <p>Lorem ipsun dolor sit amet</p>
                    <span>1 hr ago</span>
                </div>
                <div className='chatMessage own'>
                    <p>Lorem ipsun dolor sit amet</p>
                    <span>1 hr ago</span>
                </div>
                <div className='chatMessage'>
                    <p>Lorem ipsun dolor sit amet</p>
                    <span>1 hr ago</span>
                </div>
                <div className='chatMessage own'>
                    <p>Lorem ipsun dolor sit amet</p>
                    <span>1 hr ago</span>
                </div>
                <div className='chatMessage'>
                    <p>Lorem ipsun dolor sit amet</p>
                    <span>1 hr ago</span>
                </div>
                <div className='chatMessage own'>
                    <p>Lorem ipsun dolor sit amet</p>
                    <span>1 hr ago</span>
                </div>
                <div className='chatMessage'>
                    <p>Lorem ipsun dolor sit amet</p>
                    <span>1 hr ago</span>
                </div>
                <div className='chatMessage own'>
                    <p>Lorem ipsun dolor sit amet</p>
                    <span>1 hr ago</span>
                </div>
                <div className='chatMessage'>
                    <p>Lorem ipsun dolor sit amet</p>
                    <span>1 hr ago</span>
                </div>
                <div className='chatMessage own'>
                    <p>Lorem ipsun dolor sit amet</p>
                    <span>1 hr ago</span>
                </div>
                <div className='chatMessage'>
                    <p>Lorem ipsun dolor sit amet</p>
                    <span>1 hr ago</span>
                </div>
            </div>

            <div className='bottom'>
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>
       }
    </div>
  )
}

export default Chat