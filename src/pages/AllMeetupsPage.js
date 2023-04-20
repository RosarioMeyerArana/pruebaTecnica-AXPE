import MeetupItem from "../components/meetups/MeetupItem";
import Layout from "../components/layout/Layout";
import classes from "./../components/meetups/MeetupList.module.css";


export default function AllMeetupsPage() {
  return (
    <Layout>
      <section>
        <h1>All Meetups</h1>
        <ul className={classes.list}>
          <MeetupItem />
          <MeetupItem />
          <MeetupItem />
          <MeetupItem />
        </ul>
      </section>
    </Layout>
  );
}
