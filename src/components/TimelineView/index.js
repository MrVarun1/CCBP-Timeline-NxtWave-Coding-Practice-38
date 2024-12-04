import {Chrono} from 'react-chrono'
import ProjectTimeLine from '../ProjectTimelineCard'
import CourseTimeline from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList.map(item => ({title: item.title}))

  const getItem = each => {
    if (each.categoryId === 'PROJECT') {
      return <ProjectTimeLine key={each.id} data={each} />
    }
    return <CourseTimeline key={each.id} data={each} />
  }

  return (
    <div className="time-line-con">
      <div className="chrono-container">
        <div className="HeaderContainer">
          <h1 className="Heading">
            My Journey of <br />
            <span className="CCBPHeading">CCBP 4.0</span>{' '}
          </h1>
        </div>

        <Chrono
          theme={{
            secondary: 'white',
          }}
          mode="VERTICAL_ALTERNATING"
          items={items}
        >
          {timelineItemsList.map(each => getItem(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
