import React, { useState } from 'react'
import Client from '../components/Client'
import Editor from '../components/Editor'

const EditorPage = () => {

  const [clients, setclients] = useState([
    {socketId:1, username: 'Rakesh K'},
    {socketId:2, username: 'Akash K'},
    {socketId:3, username: 'Ankit K'}
  ]);

  return (
    <div className="mainWrap">
      <div className="aside">
        <div className="asideInner">
          <div className="logo">
              <img className='logoImage' src="/logo192.png" alt="logo" />
          </div>
          <h3>Connected</h3>
          <div className="clientList">

              {

                clients.map((client) => (
                  <Client key={client.socketId} username = {client.username}/>
                ))

              }

          </div>
        </div>
        <button className='btn copyBtn' >Copy RoomId</button>
        <button className='btn leaveBtn'>Leave</button>
      </div>
      <div className="editorWrap">
        <Editor/>
      </div>
    </div>
  )
}

export default EditorPage
