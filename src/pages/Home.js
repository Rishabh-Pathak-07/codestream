import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('New key generation is success, fill username 🤩',{
            position: 'top-center' // Specify the position here
          });
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('Username & Generated Key are mandatory 💀.',{
                position: 'top-center' // Specify the position here
              });
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };

    return (
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img
                    className="homePageLogo"
                    src="/code-sync.png"
                    alt="code-sync-logo"
                />
                <h4 className="mainLabel">Fill Details. Start Sync Edit !</h4>
                <div className="inputGroup">
                    {/* Username input with icon */}
                    <div className="inputBoxWithIcon">
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <input
                            type="text"
                            className="inputBox"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            onKeyUp={handleInputEnter}
                        />
                    </div>
                    {/* Room ID input with icon */}
                    <div className="inputBoxWithIcon">
                        <FontAwesomeIcon icon={faCode} className="icon" />
                        <input
                            type="text"
                            className="inputBox"
                            placeholder="Generated Key"
                            onChange={(e) => setRoomId(e.target.value)}
                            value={roomId}
                            onKeyUp={handleInputEnter}
                        />
                    </div>
                    <button className="btn joinBtn" onClick={joinRoom}>
                        Join
                    </button>
                    <span className="createInfo">
                        Getting an invite is easy with CodeStream&nbsp;
                        <a
                            href="#"
                            className="createNewBtn"
                            onClick={createNewRoom}
                        >
                            Generate Key
                        </a>
                    </span>
                </div>
                <footer>
                <h4>
                    Design and Developed by &nbsp;
                    <a href="#">Rishabh Pathak</a>
                </h4>
            </footer>
            </div>
        </div>
    );
};

export default Home;
