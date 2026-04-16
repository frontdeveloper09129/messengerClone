import './App.css'
import {ChatList} from '../src/components/chatList'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <BrowserRouter>
      <div className="app-container">
        <ChatList />
        
      </div>
    </BrowserRouter>
  )
}

export default App
