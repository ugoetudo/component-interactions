import {useState} from 'react';
import events from './sample_data';
import './App.css';
import Modal from 'react-bootstrap/Modal'


function ScheduleItem({event_start, event_end, event_name, attendees, event_owner, desc}) {
  
  const [modal_active, setActivateModal] = useState(false);

  const handleModalShow = () => setActivateModal(true);
  const handleModalClose = () => setActivateModal(false);

  if (!modal_active) {
    return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>What:</td><td>{event_name}</td>
          </tr>
          <tr>
            <td>Start Time:</td><td>{event_start}</td>
          </tr>
          <tr>
            <td>End Time:</td><td>{event_end}</td>
          </tr>
          <tr>
            <td>Attendees:</td>{attendees.map(attendee => {
              return (<td key={attendee}>{attendee}</td>)
            })}
          </tr>
          <tr>
            <td>Organizer:</td><td>{event_owner}</td>
          </tr>
        </tbody>
      </table>
      <input type="button" value="Details" onClick={handleModalShow} />
    </div>
  )}
  else {
    return (
      <Modal show={modal_active} onHide={handleModalClose}>
        <Modal.Header >
          <Modal.Title>Meeting Description</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {desc}
        </Modal.Body>
        <Modal.Footer>
          <input type="button" value="Done" onClick={handleModalClose} />
        </Modal.Footer>
      </Modal>
  )}

}

function Schedule ({show_day, oncloseclick}) {
  
  const checkDate = (event_to_check) => {
    return event_to_check.event_date === show_day;
  }

  return (
    <div>
      <input type="button" value="Go Back" onClick={oncloseclick()} />
      {
        
        events.map(ee => {
          if (checkDate(ee)) {
            return(
            <ScheduleItem 
              key={ee.event_date+ee.event_start}
              event_start={ee.event_start}
              event_end={ee.event_end}  
              event_name={ee.event_name}
              attendees={ee.attendees}
              event_owner={ee.event_owner}
              desc={ee.desc}
            />
            )
          }
          else {
            return (null)
          }
        })
      }
    </div>
  )
}

function App() {
  const [showSched, setShowSched] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  function selectDate (e) {
    setSelectedDate(e.target.value);
    console.log(selectedDate)
    setShowSched(true);
  }

  function closeSched () {
    setShowSched(false);
  }

  if (!showSched) {
    return (
    <div className="App">
      <label>Choose a date:&nbsp;
      <select name="days" defaultValue="choose a day" onChange={(e) => selectDate(e)}>
        <option value="choose a day">Dates</option>
        <option value="11/11/2024" >11/11/2024</option>
        <option value="11/12/2024" >11/12/2024</option>
        <option value="11/13/2024" >11/13/2024</option>
      </select>
      </label>
    </div>
  )}
   else {
    return (
    <div className="App">
      <Schedule show_day={selectedDate} oncloseclick={() => closeSched}/>
    </div>
  )}
}

export default App;
