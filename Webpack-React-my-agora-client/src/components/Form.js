export const Form = ({ addDiscussion }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const author = e.target[0].value;
    const title = e.target[1].value;
    const bodyText = e.target[2].value;
    addDiscussion({ author, title, bodyText });
  };

  return (
    <section className="form__container">
      <form action="" method="get" className="form" onSubmit={handleSubmit}>
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <label htmlFor="name"></label>
            <input type="text" name="name" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form__input--title">
            <label htmlFor="title"></label>
            <input type="text" name="title" id="title" placeholder="Enter your title" required />
          </div>
          <div className="form__textbox">
            <label htmlFor="story"></label>
            <textarea id="story" name="story" placeholder="Enter your question" required></textarea>
          </div>
        </div>
        <div className="form__submit">
          <input type="submit" value="SEND MESSAGE" />
        </div>
      </form>
    </section>
  );
};
