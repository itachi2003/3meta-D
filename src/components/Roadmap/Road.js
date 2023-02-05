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
    contentStyle={{ background: 'rgb(255,165,0)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(255,165,0)' }}
    date="2022 - Q1"
    iconStyle={{ background: 'rgb(255,165,0)', color: '#fff' }}
    icon={<MdStarBorderPurple500 />}
  >
    <h3 className="vertical-timeline-element-title text-3xl">Website Launch</h3>
    <h4 className="vertical-timeline-element-subtitle text-2xl">🎉🎉🎉</h4>
    <p className='text-xl'>
    🟣Assembling of team members.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(227,34,39)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(227,34,39)' }}
    date="2023 - Q3"
    iconStyle={{ background: 'rgb(227,34,39)', color: '#fff' }}
    icon={<MdStarBorderPurple500 />}
  >
    <h3 className="vertical-timeline-element-title text-3xl">Orc Nation Collection</h3>
    <h4 className="vertical-timeline-element-subtitle text-2xl">10k unique</h4>
    <p className='text-xl'>
    ⚫Launch of our first NFT collection is the Orc Nation series.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(13,152,186)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(13,152,186)' }}
    date="2023 - TBA"
    iconStyle={{ background: 'rgb(13,152,186)', color: '#fff' }}
    icon={<MdStarBorderPurple500 />}
  >
    <h3 className="vertical-timeline-element-title text-3xl">RC Duels V1</h3>
    <h4 className="vertical-timeline-element-subtitle text-2xl">Card based nft game developed in Unreal Game Engine</h4>
    <p className='text-xl'>
    🟡More information TBA.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
    date="2023 - Q4"
    iconStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
    icon={<MdStarBorderPurple500 />}
  >
    <h3 className="vertical-timeline-element-title text-3xl">Further Developments</h3>
    <h4 className="vertical-timeline-element-subtitle text-2xl">More Information</h4>
    <p className='text-x;' >
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