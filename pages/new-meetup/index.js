import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

export default function NewMeetupPage() {
  const router = useRouter();
  const addMeetupHandler = async (enterMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enterMeetupData),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
