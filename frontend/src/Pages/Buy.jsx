import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {AiOutlinePlus} from 'react-icons/ai';


function addItem({signedIn, newItem})
{
    const [addName, setName] = useState('')
    const [addDescription, setDescription] = useState('')
    const [addPrice, setPrice] = useState('')
    const [addImage, setImage] = useState()
    const [show, setShow] = useState(false);

    handleClose = () => {
        setShow(false);
        setName('');
        setDescription('');
        setPrice('');
        setImage(null);
    }
    const handleShow = () => setShow(true);

    return (
        <>
            {signedIn && (<div onClick={handleShow}>
                <AiOutlinePlus/>
            </div>
            )}

        </>
    )
}

