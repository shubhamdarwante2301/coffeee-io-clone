import React from 'react'
import style from "../styles/team.module.css"

const Founders = (props) => {
    const {profile, name, designation, subTitle, descriptions} = props.founder;
    return (
        <div className={style.founder}>
            <div className={style.profileImage}>
                <img src={profile} alt=""/>
            </div>
            <div className={style.textCenter}>
                <h3>{name}</h3>
                <p>{designation}</p>
                <p className={style.lightGrey}>{subTitle}</p>
                <p className={style.description}>{descriptions}</p>
            </div>
        </div>
    )
}

export default Founders
