import MeetupList from "@/components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://www.kdfc.com/wp-content/uploads/2020/07/road-trip-classical-california-summer-coast-iStock-1145661962.jpg",
    address: "Some address 5, 123, Some city",
    description: "This is the description",
  },
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://www.kdfc.com/wp-content/uploads/2020/07/road-trip-classical-california-summer-coast-iStock-1145661962.jpg",
    address: "Some address 5, 123, Some city",
    description: "This is the description",
  },
];

export default function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
}
