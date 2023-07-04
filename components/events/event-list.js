import EventItem from './event-item';
import styles from './event-list.module.css';

function EventList(props) {
  const { items } = props;
  console.log(items);

  return (
    <ul className={styles.list}>
      {items.map(event => (
        <EventItem 
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
