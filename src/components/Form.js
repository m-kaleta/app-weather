import React from "react";

const From = props => {
    return (
        <form onSubmit={props.submit}>
            <input type="text"
            value={props.value}
            onChange={props.change}
            placeholder="Wpisz miasto"       
            />
            <button>Szukaj...</button>
        </form>
    )
}

export default From