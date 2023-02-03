import React from 'react'
import style from "../styles/team.module.css"

const Teammate = (props) => {
    const {profile, name, designation, education} = props.data;
    return (
        <div className={style.teammate}>
            <div className={style.teammateProfile}>
                <img src={profile} alt=""/>
            </div>
            <div className={style.textCenter}>
                <h3>{name}</h3>
                <p>{designation}</p>
                <p className={style.lightGrey}>{education}</p>
            </div>
        </div>
    )
}

export default Teammate
