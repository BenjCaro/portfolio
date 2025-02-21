import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './Component/ModalContent';



export const ButtonHome = () => {
   const [showModal, setShowModal] = useState(false);
   return (
    <><button onClick={() => setShowModal(true)} type="button" className="btn btn-danger btn-sm"> En savoir plus</button><>
       {showModal && createPortal(
         <ModalContent onClose={() => setShowModal(false)} />,
         document.getElementById('modal')
       )}
     </></>
   )
}




