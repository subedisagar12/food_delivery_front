import React from 'react'

const Input=({id,type,placeholder,label,pattern,required,onChange,value})=>{

    if(required){
        return(
            <React.Fragment>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} placeholder={placeholder} value={value} className="form-control checkout-input" pattern={pattern} required onChange={e=>onChange(e)}/>
            </React.Fragment>
        )
    }
    else{
    return(
        <React.Fragment>
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} placeholder={placeholder} className="form-control checkout-input" pattern={pattern} value={value} onChange={e=>onChange(e)}/>
        </React.Fragment>
    
    )
    }
}
export default Input