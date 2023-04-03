import MeetupDetail from "@/components/meetups/MeetupDetail";
import { Fragment } from "react";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://www.kdfc.com/wp-content/uploads/2020/07/road-trip-classical-california-summer-coast-iStock-1145661962.jpg"
      title="First Meetup"
      address="Some street, 5, Some city"
      description="This is a first meetup"
    />
  );
}
