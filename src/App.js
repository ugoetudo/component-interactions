import {useState} from 'react';
import events from './sample_data';
import './App.css';
import Modal from 'react-bootstrap/Modal'


function ScheduleItem({event_start, event_end, event_name, attendees, event_owner, desc}) {
  
  cosnt [modal_active, setActivateModal] = setState(False);

  const handleModalShow = () => setActivateModal(True);
  const handleModalClose = () => setActivateModal(False);

  if (!modal_active) {
    return (
    <div>
      <tr>
        <td>What:</td> <td>{event_name}</td>
      </tr>
      <tr>
        <td>Start Time:</td><td>{event_start}</td>
      </tr>
      <tr>
        <td>End Time:</td><td>{event_end}</td>
      </tr>
      <tr>
        <td>Attendees:</td>{attendees.map(attendee => {<td>{attendee}</td>})}
      </tr>
      <tr>
        <td>Organizer:</td><td>{event_owner}</td>
      </tr>
      <tr>
        <input type="button" value="Details" onClick={handleModalShow} />
      </tr>
    </div>
  )}
  else {
    return (
      <Modal show={modal_active} onHide={handleModalClose}>
        <Modal.Header closeButton>
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
      <input type="button" value="Go Back" onClick={oncloseclick} />
      {
        events.map(ee => {
          if (checkDate(ee)) {
            <ScheduleItem 
              event_start={ee.event_start}
              event_end={ee.event_end}  
              event_name={ee.event_name}
              attendees={ee.attendees}
              event_owner={ee.event_owner}
              desc={ee.desc}
            />
          }
        })
      }
    </div>
  )
}

function App() {
  const [showSched, setShowSched] = useState(False);
  const [selectedDate, setSelectedDate] = useState("");

  function selectDate (e) {
    setSelectedDate(e.target.value);
    setShowSched(True);
  }

  function closeSched () {
    setShowSched(False);
  }

  if (!showSched) {
    return (
    <div className="App">
      <label for="days">Choose a date:</label>
      <select name="days">
        <option value="11/11/2024" onSelect={selectDate}>11/11/2024</option>
        <option value="11/12/2024" onSelect={selectDate}>11/12/2024</option>
        <option value="11/13/2024" onSelect={selectDate}>11/13/2024</option>
      </select>
    </div>
  )}
   else {
    return (
    <div className="App">
      <Schedule show_day={selectedDate} oncloseclick={() => {closeSched}}/>
    </div>
  )};
}

export default App;
