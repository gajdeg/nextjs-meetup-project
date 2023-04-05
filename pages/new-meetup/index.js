import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";

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
    router.push("/");
  };
  return (
    <Fragment>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Add your meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  );
}
