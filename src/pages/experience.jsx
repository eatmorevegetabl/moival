import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component/dist-modules';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool, MdOutlineWork } from 'react-icons/md';

export default function Experience() {
  return (
    <div className='experience font-Arimo'>
      <VerticalTimeline lineColor='#0ea5e9'>
        {/* High School */}
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='Class of 2007'
          iconStyle={{ background: 'rgb(20 184 166)', color: 'white' }}
          icon={<MdSchool />}
        >
          <h3 className='vertical-timeline-element-title'>
            Marysville High School
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Marysville, CA</h4>
          <p> High School Diploma </p>
        </VerticalTimelineElement>
        {/* Willis Towers Watson */}
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='August 2011 - January 2019'
          iconStyle={{ background: 'rgb(20 184 166)', color: 'white' }}
          icon={<MdOutlineWork />}
        >
          <h3 className='vertical-timeline-element-title'>
            Willis Towers Watson
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            South Jordan, UT
          </h4>
          <p>
            Trainer, Supervisor, Licensed Benefit Advisor (Healthcare Sales)
          </p>
        </VerticalTimelineElement>
        {/* U.S. Bank */}
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='June 2019 - August 2021'
          iconStyle={{ background: 'rgb(20 184 166)', color: 'white' }}
          icon={<MdOutlineWork />}
        >
          <h3 className='vertical-timeline-element-title'>U.S. Bank</h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Salt Lake City, UT
          </h4>
          <p> Universal Banker </p>
        </VerticalTimelineElement>
        {/* Intermountain Healthcare */}
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='August 2021 - September 2022'
          iconStyle={{ background: 'rgb(20 184 166)', color: 'white' }}
          icon={<MdOutlineWork />}
        >
          <h3 className='vertical-timeline-element-title'>
            Intermountain Healthcare, Inc.
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Salt Lake City, UT
          </h4>
          <p> Enhanced Scheduler </p>
        </VerticalTimelineElement>
        {/* Coding Bootcamp */}
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='July 2022 - January 2023'
          iconStyle={{ background: 'rgb(20 184 166)', color: 'white' }}
          icon={<MdSchool />}
        >
          <h3 className='vertical-timeline-element-title'>
            University of Utah - Continuing Education
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Salt Lake City, UT
          </h4>
          <p> 24-Week Coding Bootcamp </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
