import React, {useState} from "react";
import Modal from "./components/Modal";
import './index.css';

function App() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button className="modalBtn"
              onClick={() => setOpenModal(true)}>Modal</button>
      <Modal open={openModal} 
             onClose={() => setOpenModal(false)}
      />
    </div>
  );
}

export default App;
