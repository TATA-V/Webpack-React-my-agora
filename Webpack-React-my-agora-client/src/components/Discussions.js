import { Discussion } from "./Discussion";

export const Discussions = ({ discussions, deleteDiscussion }) => {
  return (
    <section className="discussion__wrapper">
      <ul className="discussions__container">
        {discussions.map((el) => {
          return <Discussion key={el.id} discussion={el} deleteDiscussion={deleteDiscussion} />;
        })}
      </ul>
    </section>
  );
};
