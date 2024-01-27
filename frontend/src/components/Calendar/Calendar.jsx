import React, { useCallback, useState, useEffect } from 'react';
import Scheduler, { Editing } from 'devextreme-react/scheduler';
import { CheckBox } from 'devextreme-react/check-box';
import notify from 'devextreme/ui/notify';
import 'devextreme/dist/css/dx.light.css';
import axios from 'axios';

const currentDate = new Date(2024, 1, 27);
const views = ['day', 'week'];
const showToast = (event, value, type) => {
  notify(`${event} "${value}" task`, type, 800);
};
const showAddedToast = (e) => {
  showToast('Added', e.appointmentData.text, 'success');
};
const showUpdatedToast = (e) => {
  showToast('Updated', e.appointmentData.text, 'info');
};
const showDeletedToast = (e) => {
  showToast('Deleted', e.appointmentData.text, 'warning');
};


const patientId = "agmDo5tJ8vRTo3U01BeQgjbN7DD3"


const Calendar = () => {
  const [allowAdding, setAllowAdding] = useState(true);
  const [allowDeleting, setAllowDeleting] = useState(true);
  const [allowResizing, setAllowResizing] = useState(true);
  const [allowDragging, setAllowDragging] = useState(true);
  const [allowUpdating, setAllowUpdating] = useState(true);
  const [data, setData] = useState([]);
  const onAllowAddingChanged = useCallback((e) => setAllowAdding(e.value), []);
  const onAllowDeletingChanged = useCallback((e) => setAllowDeleting(e.value), []);
  const onAllowResizingChanged = useCallback((e) => setAllowResizing(e.value), []);
  const onAllowDraggingChanged = useCallback((e) => setAllowDragging(e.value), []);
  const onAllowUpdatingChanged = useCallback((e) => setAllowUpdating(e.value), []);

  useEffect(() => {
    async function fetchPatientSchedule() {
      const patientSchedule = await axios.get("http://localhost:5000/schedule/" + patientId);
      const appointmentsData = patientSchedule.data.appointments

      const data1 = appointmentsData
        ? Object.entries(appointmentsData).map(([id, details]) => ({
          startDate: new Date(details.startDate),
          endDate: new Date(details.endDate),
          text: details.title,
          allDay: details.allDay   
        }))
      : [];
      console.log(data1);
      setData(data1);
    }

    fetchPatientSchedule();
  }, []);

  const onAppointmentAdding = useCallback(async (e) => {
    console.log(e);
    const response = await axios.post('http://localhost:5000/schedule', {
      title: e.appointmentData.text,
      startDate: e.appointmentData.startDate,
      endDate: e.appointmentData.endDate,
      allDay: e.appointmentData.allDay
    });
    console.log(response);
  });

  return (
    <React.Fragment>
        <div className='m-5 p-3'>
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        views={views}
        defaultCurrentView="week"
        defaultCurrentDate={currentDate}
        startDayHour={9}
        endDayHour={19}
        height={600}
        onAppointmentAdded={ onAppointmentAdding }
        onAppointmentUpdated={showUpdatedToast}
        onAppointmentDeleted={showDeletedToast}
      >
        <Editing
          allowAdding={allowAdding}
          allowDeleting={allowDeleting}
          allowResizing={allowResizing}
          allowDragging={allowDragging}
          allowUpdating={allowUpdating}
        />
      </Scheduler>
      </div>

      <div className="options">
        {/* <div className="caption">Options</div> */}
        <div className="options-container flex m-5 mr-3 mt-7  gap-10 text-center items-center justify-center">
          <div className="option">
            <CheckBox
              defaultValue={allowAdding}
              text="Allow adding"
              onValueChanged={onAllowAddingChanged}
            />
          </div>
          <div className="option">
            <CheckBox
              defaultValue={allowDeleting}
              text="Allow deleting"
              onValueChanged={onAllowDeletingChanged}
            />
          </div>
          <div className="option">
            <CheckBox
              defaultValue={allowUpdating}
              text="Allow updating"
              onValueChanged={onAllowUpdatingChanged}
            />
          </div>
          <div className="option">
            <CheckBox
              defaultValue={allowResizing}
              text="Allow resizing"
              onValueChanged={onAllowResizingChanged}
              disabled={!allowUpdating}
            />
          </div>
          <div className="option">
            <CheckBox
              defaultValue={allowDragging}
              text="Allow dragging"
              onValueChanged={onAllowDraggingChanged}
              disabled={!allowUpdating}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Calendar;
