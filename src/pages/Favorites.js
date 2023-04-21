import Layout from "../components/layout/Layout";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage({favorites, handleAddFavorites}) {
  return (
    <Layout>
      <section>
        <h1>Favorites Page</h1>
        <ul className={classes.list}>
        {
          favorites?.map((item) => <MeetupItem key={item.id} item={item} handleAddFavorites={handleAddFavorites} />)
        }
        {
          favorites.length === 0 && <div>Oops! you don't have favorites listed yet</div>
        }
        </ul>
      </section>
    </Layout>
  );
}
