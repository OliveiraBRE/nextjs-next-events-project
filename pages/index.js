import { getFeaturedEvents } from '@/helpers/api-util';
import Head from 'next/head';
import EventList from '@/components/events/event-list';

function HomePage(props) {
  
  return (
    <>
    <Head>
      <title>Next Events</title>
    </Head>
      <ul>
        <EventList items={props.events} />
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents
    },
    revalidate: 1800
  }
}

export default HomePage;
