function ContactForm() {
  return (
    <>
      <div className="form">ContactForm</div>
      <form className="form flex flex-col gap-4 items-center">
        <fieldset className="fieldset">
          <label className="label">
            Name:
            <input type="text" name="name" className="input" />
          </label>
        </fieldset>
        <fieldset className="fieldset">
          <label className="label">
            Email:
            <input type="email" name="email" className="input" />
          </label>
        </fieldset>
        <fieldset className="fieldset">
          <label className="label">
            Message:
            <textarea name="message" className="input textarea" />
          </label>
        </fieldset>

        <button type="button" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactForm;
