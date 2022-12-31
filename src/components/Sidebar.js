import React, { useState } from 'react'

import Modal from 'react-modal'  // npm i react-modal
import { GrClose } from "react-icons/gr"  // npm i react-icons

function Sidebar() {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    <div className="logo-mine">
                        <a href="/#">HKRY</a>
                    </div>
                    <a href='/#'>Brand<b>Colors</b></a>
                </div>
                <div className="desc">
                    The biggest collection of official brand color codes around. Curated by @brandcolors and hasankuray.
                </div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a href='/#' onClick={toggleModal}>About BrandColors</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}  // modal dışına tıklandığında modal kapanır.
                className="about-modal"
                overlayClassName="about-modal-overlay">

                <button className="modal-close-btn" onClick={toggleModal}>
                    <GrClose />
                </button>

                <h3>About BrandColor</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, praesentium unde? Sint ad culpa quos ab deleniti, dolores commodi suscipit! Numquam, tenetur. Tempore quod praesentium aspernatur, fugiat voluptas dolorum harum!</p>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque qui similique nisi ab a neque placeat, quo rerum, molestias animi ullam sunt ipsam aperiam eos porro minima obcaecati odio.</p>
            </Modal>
        </>
    )
}

export default Sidebar