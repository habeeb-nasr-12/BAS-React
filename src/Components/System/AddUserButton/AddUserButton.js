import React, { useState } from 'react'
import "./adduser.css"
import { Button } from 'react-bootstrap'
import AddUpdateUser from '../Users/AddUpdateUser/AddUpdateUser'
import { useContext } from 'react'
import { showAddUpdateUser } from '../../../Context/CheckAddUpdateUserVisability'
const AddUserButton = () => {
    const {showAddUserModel,setShowAddUserModel} = useContext(showAddUpdateUser)
    return (
        <Button
            className='add-user-button'
            onClick={() => {   setShowAddUserModel(true) }}

        >إضافة جديدة</Button>
    )
}

export default AddUserButton