import Layout from "../components/layout/Layout";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupsPage({handleAddMeetup}) {
  return (
    <Layout>
      <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm handleAddMeetup={handleAddMeetup} />
      </section>
    </Layout>
  );
}
