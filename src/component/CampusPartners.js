import React from 'react'

import style from "../styles/campusPartners.module.css"
import FixedNavbar from "./FixedNavbar"
import HeroSection from './HeroSection'
import Heading from "../component/utils/Heading"
import Teammate from "./Teammate"
import CAMPUSPARTNERS from "../component/utils/campuspartners"

const CampusPartners = () => {
    return (
        <div>
            <FixedNavbar />
            {/* hero section */}
            <HeroSection title={"Evangalising the idea of Coffeee in the student "} coloredTitle={"community!"}/>
            
            <div>
                <Heading title={"We believe in Team!"}/>
                <p className={style.details}>Coffeee's mission of creating the largest community of pre-assessed developers is supported by our army of rockstar partners across campuses. They are ensuring that India solves the world's developer hiring problem step by step. We're so fortunate to have them as partners.</p>
            </div>

            {/* campus partners */}
            <Heading title={"Meet Our Campus Partners"} />
            <div className={style.campusPartners}>
                {
                    CAMPUSPARTNERS.map((data) => {
                        return <Teammate data={data} />
                    })
                }
            </div>
        </div>
    )
}

export default CampusPartners
