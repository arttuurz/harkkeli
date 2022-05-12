import React from "react";

const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
e.preventDefault();
onAdd(e.target.name.value, e.target.suositusika.value);
e.target.name.value = "";
e.target.suositusika.value = "";
}

    return(
        <div>
            <form on Submit={handleOnSubmit}>
              <h3>Anna lelun nimi ja suositusikä </h3>
              <input placeholder="Lelun Nimi" name="name"/>
              <input placeholder ="Suositusikä" name="suositusika"/>
              <button onSubmit={handleOnSubmit}>Add</button> 
              <hr />
            </form>
            
        </div>
    );
};
export default AddUser;
