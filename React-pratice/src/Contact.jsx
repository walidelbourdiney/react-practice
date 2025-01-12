import "./Contact.css";
const Contact = () => {
  return (
    <article className="contact-card">
      <img src="/src/assets/picofme.png" alt="self picture" />
      <h3>Walid Ezzat</h3>
      <div className="info-group">
        <img src="/src/assets/globe.png" alt="globe icon" />
        <p>(212) 555-1234</p>
      </div>
      <div className="info-group">
        <img src="/src/assets/globe.png" alt="globe icon" />
        <p>mr.walid@world.meow</p>
      </div>
    </article>
  );
};

export default Contact;
