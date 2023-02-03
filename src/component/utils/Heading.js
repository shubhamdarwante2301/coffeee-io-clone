import React from 'react'
import style from "../../styles/utility.module.css"

const Heading = ({title}) => {
    return (
        <div>
            <h2 className={style.heading}>{title}</h2>
        </div>
    )
}

export default Heading
