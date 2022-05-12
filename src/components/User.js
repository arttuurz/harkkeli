import React from 'react'
import './user.css'

const User = ({id, name, suositusika, onDelete}) =>{

    const handleDelete = () => {
        onDelete(id);
    }
    return (
        <div className='list'>
            <span>{name}</span>
            <span>{suositusika}</span>
            <span>
                <button>Muokkaa</button>
                <button onClick={handleDelete}>Poista</button>
            </span>
        </div>
    )
}
export default User