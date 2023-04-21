import MeetupItem from "../components/meetups/MeetupItem";
import Layout from "../components/layout/Layout";
import classes from "./../components/meetups/MeetupList.module.css";


export default function AllMeetupsPage({data}) {
  return (
    <Layout>
      <section>
        <h1>All Meetups</h1>
        <ul className={classes.list}>
          {
            data?.map((item) => <MeetupItem key={item.id} item={item} /> )
          }
        </ul>
      </section>
    </Layout>
  );
}
