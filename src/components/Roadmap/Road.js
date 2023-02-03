import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./style.css"
// import { FaHatCowboy } from "react-icons/fa"
// import { FaHorseHead } from "react-icons/fa"
import { MdStarBorderPurple500 } from "react-icons/md"



const Road = () => {
  return (
    <>
    <div className='mt-20 '>

    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2022 - Q1"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdStarBorderPurple500 />}
  >
    <h3 className="vertical-timeline-element-title">Website Launch</h3>
    <h4 className="vertical-timeline-element-subtitle">🎉🎉🎉</h4>
    <p>
    🟣Assembling of team members.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2023 - Q3"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdStarBorderPurple500 />}
  >
    <h3 className="vertical-timeline-element-title">Orc Nation Collection</h3>
    <h4 className="vertical-timeline-element-subtitle">10k unique</h4>
    <p>
    ⚫Launch of our first NFT collection is the Orc Nation series.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2023 - TBA"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdStarBorderPurple500 />}
  >
    <h3 className="vertical-timeline-element-title">RC Duels V1</h3>
    <h4 className="vertical-timeline-element-subtitle">Card based nft game developed in Unreal Game Engine</h4>
    <p>
    🟡More information TBA.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2023 - Q4"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<MdStarBorderPurple500 />}
  >
    <h3 className="vertical-timeline-element-title">Further Developments</h3>
    <h4 className="vertical-timeline-element-subtitle">More Information</h4>
    <p>
    🟢TBA
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<MdStarBorderPurple500 />}
  />
</VerticalTimeline>
    </div>
    
    </>
  )
}

export default Road