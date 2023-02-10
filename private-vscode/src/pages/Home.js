import React, {useState} from 'react';
import {v4 as uuidV4} from 'uuid';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState('');
  const [UserName, setUserName] = useState('');

    const createNewRoom = (e) => {
      e.preventDefault();
      const id = uuidV4();
      // console.log(id);
      setRoomId(id);

      toast.success('Created a new room');

    }

    const joinRoom = () => {
      if (!roomId || !UserName) {
        toast.error('ROOM ID & username is required');
        return;
      }

      // redirect
      navigate(`/editor/${roomId}`,{
        state: {
          UserName,
        },
      })

    }

    const handleInputEnter = (e) => {
      if (e.code === 'Enter') {
          joinRoom();
      }
    };

  return (
    <div className='homePageWrapper'>
      <div className="formWrapper">
          <img className='homePageLogo' src="/logo192.png" alt="logo" />
          <h4 className='mainLabel'> Paste Invitation RoomId</h4>
          <div className="inputGroup">
            <input 
                type="text" 
                className='inputBox' 
                placeholder='Room ID'
                onChange={(e) => setRoomId(e.target.value)}
                value={roomId}
                onKeyUp={handleInputEnter}
            />
            <input 
                type="text" 
                className='inputBox' 
                placeholder='UserName'
                onChange={(e) => setUserName(e.target.value)}
                value={UserName}
                onKeyUp={handleInputEnter}
            />
            <button className='btn joinBtn' onClick={joinRoom}>
              Join
            </button>
            <span className='create Info'>
              If you don't have an invite then create &nbsp;
              <a onClick={createNewRoom} href="" className='createNewBtn'>
                new Room
              </a>
            </span>
          </div>
      </div>
       <footer>
        <h4>Built with love by akash</h4> 
       </footer>    
    </div>
  )
}

export default Home;
