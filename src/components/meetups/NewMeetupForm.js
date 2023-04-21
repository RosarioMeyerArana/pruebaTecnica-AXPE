import { useState } from 'react'
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm({ handleAddMeetup }) {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [address, setAddress] = useState('')
  const [description, setDescription] = useState('')
  const [notification, setNotification] = useState(null)

  const SubmitHandler = (event) => {
    event.preventDefault();
    const meetupInfo = {title, image, address, description}
    handleAddMeetup(meetupInfo)
    setTitle('')
    setImage('')
    setAddress('')
    setDescription('')
    setNotification('succesfully added!')
    setTimeout((()=>{
      setNotification(null)
    }), 2000)
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" value={title} required id="title" onChange={(e)=> setTitle(e.target.value)} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" value={image} required id="image" onChange={(e)=> setImage(e.target.value)} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" value={address} required id="address" onChange={(e)=> setAddress(e.target.value)} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" value={description} required rows="5" onChange={(e)=> setDescription(e.target.value)}></textarea>
        </div>
        <div className={classes.actions}>
          <p>{notification}</p>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
