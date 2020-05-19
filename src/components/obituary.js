import React from 'react'

import FamilyImage from "./pics/FamilyImage"
import SkatingImage from "./pics/SkatingImage"
import SallieImage from "./pics/SallieImage"
import NorwayImage from "./pics/NorwayImage"
import CribbageImage from "./pics/CribbageImage"

const Obituary = () => (
    <>
        <p>
            Bernard Edwin DeBar, devout Christian, devoted husband and loving father, died peacefully from natural
            causes in his home on May 11 th , 2020 at the age of 89. Bernard, also known as Bud and Bernie, was born
            on March 6, 1931 in Aurora, IA to Harley and Velma (Rhodes) DeBar as the youngest of four siblings.
        </p>
        <p>
            After graduating from high school in Waterloo, IA, Bud attended Moody Bible College in Chicago, served
            in the U.S. Army in Germany, then moved to the Twin Cities to attended Bethel College where he met
            many lifelong friends. He eventually earned his B.A. degree from Augsburg College and his M.A. in
            Education from the University of Minnesota. Bud taught business education for over thirty years at
            Columbia Heights High School and directed the DECA program, helping many students to achieve state
            awards.
        </p>
        <div style={{ display: `flex`, flexFlow: `row wrap`, justifyContent: `center` }}>
            <div style={{ width: `360px`, margin: `0 12px`, marginBottom: `24px` }}>
                <FamilyImage />
            </div>
        </div>
        <p>
            Bud met his beloved wife of 61 years, Sallie, on a blind date. On that date he knew he had met the love
            of his life, and he and Sallie were soon married in December 1957. They travelled extensively overseas
            while Bud worked at Northwest Orient Airlines and prior to having their four sons. They frequently
            traveled to Iowa to visit their families, especially Sallie’s large family who farmed near George, IA.
        </p>
        <div style={{ display: `flex`, flexFlow: `row wrap`, justifyContent: `center` }}>
            <div style={{ width: `480px`, margin: `0 12px`, marginBottom: `36px` }}>
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
            A naturally-gifted athlete, Bud excelled at any sports or games he tried. He was an ace fast-pitch pitcher
            and starting pitcher for his Columbia Heights School District team which won three state titles. He
            learned to figure skate while stationed near the German Alps. Later he coached his sons’ hockey teams
            for 16 years wearing the figures skates and always outskated the players and fellow coaches. He took up
            tennis as an adult and delivered one-liner jokes to his friends on the court, almost as quickly as he
            returned lightning-fast net volleys. He coached the Columbia Heights H.S. boys tennis team and the girls
            fast-pitch pitchers. He took pride in giving every player an equal chance to succeed and passed his love
            of sports down to his sons.
        </p>
        <div style={{ display: `flex`, flexFlow: `row wrap`, justifyContent: `center` }}>
            <div style={{ width: `360px`, margin: `0 12px`, marginBottom: `36px`, padding: "12px" }}>
                <SkatingImage />
            </div>
        </div>
        <p>
            Bud was always gentle, loving and non-judgmental while knowing how to have fun with a joke, a smile,
            and a twinkle in the eye. For nearly five decades Bud and Sallie owned a cabin on Lake Norway outside
            New London, MN. They converted it from woodland thicket into an idyllic family gathering place. Their
            family waterskied, fished, swam, played games, and had countless reunions at the lake with extended
            family.
        </p>
        <div style={{ display: `flex`, flexFlow: `row wrap`, justifyContent: `center` }}>
            <div style={{ width: `480px`, margin: `0 12px`, marginBottom: `36px`, padding: "12px" }}>
                <NorwayImage />
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
        <div style={{ display: `flex`, flexFlow: `row wrap`, justifyContent: `center` }}>
            <div style={{ width: `400px`, margin: `0 12px`, marginBottom: `36px`, padding: "12px" }}>
                <CribbageImage />
            </div>
        </div>
        <p style={{ textAlign: `center` }}>Rest in Peace, Bud
        </p>
    </>
)

export default Obituary