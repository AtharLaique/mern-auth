import React from 'react'

const Button=({title,onClick})=> {
    return (
    <button type="button" onClick={onClick} className="btn btn-primary btn-lg btn-block">
        {title}
    </button>
    )
}
export default Button;