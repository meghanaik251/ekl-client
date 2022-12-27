function WidgetsContact() {
  return (
    <div className="contact-info">
      <h5 className="heading space40">
        <span>Contact Us</span>
      </h5>
      <div className="media-list">
        <div className="media">
          <i className="pull-left fa fa-home"></i>
          <div className="media-body">
            <strong>Address:</strong>
            <br /> C Lite Building, KLE Tech University Compound, <br />
            BVB College Campus, Vidyanagar,
            <br />
            Hubli Dharwad,Karnataka 5800031
          </div>
        </div>
        <br></br>
        <div className="media">
          <i className="pull-left fa fa-phone"></i>
          <div className="media-body">
            <strong>Telephone:</strong>
            <br /> +91 8050050183, +91 8050050185, <br />
            +91 8050050186
          </div>
        </div>

        <br></br>

        <div className="media">
          <i className="pull-left fa fa-envelope" aria-hidden="true"></i>
          <div className="media-body">
            <strong>Email:</strong>
            <br />
            <a href="mailto:hello@eklakshya.com">hello@eklakshya.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WidgetsContact;
