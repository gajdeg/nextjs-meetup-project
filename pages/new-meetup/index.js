import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const addMeetupHandler = (enterMeetupData) => {
    console.log(enterMeetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
