import { useEffect, useState } from "react";
import { Form } from "./components/Form";
import { Discussions } from "./components/Discussions";
import { TopLine } from "./components/TopLine";

function App() {
  const domain = "http://localhost:4000";
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    getDiscussion();
  }, []);

  const getDiscussion = () => {
    return fetch(domain + "/discussions")
      .then((res) => res.json())
      .then((json) => {
        setDiscussions(json);
      });
  };

  const addDiscussion = ({ author, title, bodyText }) => {
    const newDiscussionData = { author, title, bodyText };
    fetch(domain + "/discussions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDiscussionData),
    }).then((res) => {
      if (res.status === 201) {
        getDiscussion();
      }
    });
  };

  const deleteDiscussion = (id) => {
    fetch(domain + `/discussions/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 202 || res.status === 204) {
        getDiscussion();
      }
    });
  };

  return (
    <>
      <TopLine />
      <Form addDiscussion={addDiscussion}></Form>
      <Discussions discussions={discussions} deleteDiscussion={deleteDiscussion}></Discussions>
    </>
  );
}

export default App;
