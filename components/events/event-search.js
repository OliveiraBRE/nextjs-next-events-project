import {useRef} from 'react';
import Button from '../ui/button';

import styles from './event-search.module.css';

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);

  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year"></label>
          <select id="year" ref={yearInputRef}>
            <option value="2021" key="">
              2021
            </option>
            <option value="2022" key="">
              2022
            </option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1" key="">
              January
            </option>
            <option value="2" key="">
              February
            </option>
            <option value="3" key="">
              March
            </option>
            <option value="4" key="">
              April
            </option>
            <option value="5" key="">
              May
            </option>
            <option value="6" key="">
              June
            </option>
            <option value="7" key="">
              July
            </option>
            <option value="8" key="">
              August
            </option>
            <option value="9" key="">
              September
            </option>
            <option value="10" key="">
              October
            </option>
            <option value="11" key="">
              November
            </option>
            <option value="12" key="">
              December
            </option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;
