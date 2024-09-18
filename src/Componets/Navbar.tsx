import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { Button, Modal } from 'antd';
import { Form } from "antd";


const Navbar = () => {
    const [modal2Open, setModal2Open] = useState(false);

  return (
    <div className='bg-primary h-18 p-3 justify-between flex' >
        <p className='text-secondary '>Logo</p>
        <button className='border-accent-default border p-2 rounded-xl text-sm flex items-center hover:bg-accent-light ' onClick={() => setModal2Open(true)}><FaPlus />
        Sell Iteam</button>
        
        <Modal
        title="Sell Iteam"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>

    </div>
  )
}

export default Navbar