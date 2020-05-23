import React from 'react'

import SiblingsImage from "./pics/SiblingsImage"
import SkatingImage from "./pics/SkatingImage"
import SallieImage from "./pics/SallieImage"
import NorwayImage from "./pics/NorwayImage"
import CribbageImage from "./pics/CribbageImage"
import BoysImage from "./pics/BoysImage"

const Obituary = () => (
    <>
        <p>
            Bernard Edwin DeBar, devout Christian, devoted husband and loving father, died peacefully from natural
            causes in his home on May 11th , 2020 at the age of 89. Bernard, also known as Bud and Bernie, was born
            on March 6, 1931 in Aurora, Iowa to Harley and Velma (Rhodes) DeBar as the youngest of four siblings. He 
            was a long-time resident of New Brighton, Minnesota.
        </p>
        <p>
            After graduating from high school in Waterloo, IA, Bud attended Moody Bible College in Chicago, served
            in the U.S. Army in Germany, then moved to the Twin Cities to attended Bethel College where he met
            many lifelong friends. He earned education degrees from Augsburg College (B.A.) and the University of 
            Minnesota (M.A.). Bud taught business education for over thirty years at Columbia Heights High School 
            and directed the DECA program, helping many students to achieve state awards, and coached the boys 
            tennis team and girls fast-pitch softball pitchers.
        </p>
        <div style={{ display: `flex`, flexFlow: `column wrap`, justifyContent: `center`, alignItems: `center`, }}>
            <div style={{ width: `100%`, maxWidth:`360px`, margin: `0 12px`, marginBottom: `24px` }}>
                <SiblingsImage />
            </div>
        </div>
        <p>
            Bud met Sallie, his beloved wife of 61 years, on a blind date. He knew when they first met that he 
            had met the love of his life, and he and Sallie were soon married in December 1957.  They travelled 
            extensively overseas while Bud worked at Northwest Orient Airlines, prior to having their four sons. 
            They also frequently visited their familes in Iowa, especially Sallie’s large family who farmed near 
            George, IA.
        </p>
        <div style={{ display: `flex`, flexFlow: `column wrap`, justifyContent: `center`, alignItems: `center`, }}>
            <div style={{ width: `100%`, maxWidth:`480px`, margin: `0 12px`, marginBottom: `36px` }}>
                <SallieImage />
            </div>
        </div>
        <p>
            His faith in Christ led Bud to help found Salem Baptist Church in New Brighton, MN (now GracePoint
            Church). He served in many leadership capacities for the church, including church moderator and
            teaching adult Sunday school. Weekly bible study groups were a regular part of his weekly routine until
            very late in life.
        </p>
        <p>
            A natural athlete, Bud excelled at sports. He was an excellent fast-pitch softball pitcher and won three 
            state titles as an adult with his Columbia Heights School District team. As an avid tennis player, he 
            delivered one-liner jokes to his friends on the court almost as quickly as he returned lightning-fast net 
            volleys. He taught himself to figure skate while stationed near the German Alps. Later he coached his sons’ 
            hockey teams for 16 years wearing figure skates and outskating the players and fellow coaches. He took 
            pride in giving every player an equal chance to succeed and he passed his love of sports down to his sons. 
        </p>
        <div style={{ display: `flex`, flexFlow: `row wrap`, justifyContent: `center` }}>
            <div style={{ width: `100%`, maxWidth:`360px`, margin: `0 12px`, marginBottom: `36px`, padding: "12px" }}>
                <SkatingImage />
            </div>
        </div>
        <p>
            Bud was gentle, loving and non-judgmental and enjoyed delivering a good joke and socializing. He and 
            Sallie hosted countless reunions at their home and lakeshore cabin with their large extended family. Their 
            kitchen table was a second home to their sons’ friends and many others. And the cabin on Lake Norway, MN, 
            converted from woodland thicket into an idyllic family gathering place over five decades, became a refuge 
            for their immediate and extended family and friends.
        </p>
        <div style={{ display: `flex`, flexFlow: `column wrap`, justifyContent: `center`, alignItems: `center`, }}>
            <div style={{ width: `100%`, maxWidth:`480px`, margin: `0 12px`, marginBottom: `36px`, padding: "12px" }}>
                <NorwayImage />
            </div>
            <div style={{ width: `100%`, maxWidth:`480px`, margin: `0 12px`, marginBottom: `36px`, padding: "12px" }}>
                <BoysImage />
            </div>
        </div>
        <p>
            Bud is survived by his four sons, Andre (Christina), Nick (Stacy), Lance and Pierre; eight grandchildren, Alec,
            Keeley, Sophie, Jacques, Elise, Marian, Harley, and Everly; and many family members and countless
            friends. Bud was preceded in death by his wife, Sallie (Beek) DeBar, and his siblings Geneva (Earl)
            Weibbeeke, Raymond (Elinor) DeBar, and Norma (Russell) Young.
        </p>
        <p>
            Memorial donations: Union Gospel Mission, Dept. of Donor Services, 77 Ninth Street, St. Paul, MN
            55101. 651-444-5801 or <a href="https://app.mobilecause.com/f/22sd/n">this link</a>.
        </p>
        <div style={{ display: `flex`, flexFlow: `column wrap`, justifyContent: `center`, alignItems: `center`, }}>
            <div style={{ width: `100%`, maxWidth:`400px`, margin: `0 12px`, marginBottom: `36px`, padding: "12px" }}>
                <CribbageImage />
            </div>
        </div>
        <p style={{ textAlign: `center` }}>Rest in Peace, Bud
        </p>
    </>
)

export default Obituary