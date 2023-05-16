import React from 'react'
import loginClass from './customform.module.css'

function CustomformInput(props) {
    const { 
        type,
        label,
        i_id,
        i_class,
        name,
        value,
        onChange,
        onBlur} = props;
    return (
        <>

            <div className="form-floating my-4">
                <input type={type} id={i_id} onChange={onChange} onBlur={onBlur} name={name} 
                value={value}className={`form-control  ${i_class}`} placeholder={label}
                    autoComplete="off " required />
                <label htmlFor={i_id} className=''>{label}</label>
            </div>
        </>

    )
}

export default CustomformInput