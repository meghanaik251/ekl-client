import WidgetsContact from "../../components/widgets/widget-contact";

import WidgetContactForm from "../../components/widgets/widget-contact-form";

function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <aside className="col-sm-4">
            <WidgetsContact></WidgetsContact>
          </aside>
          <aside className="col-sm-8">
            <div className="google-map space-bottom-50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5088.075652268301!2d75.11882062055453!3d15.368828183908866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa247612556cc78b3!2sKLE+Technological+University!5e0!3m2!1sen!2sin!4v1530612485253"
                width="100%"
                height="400"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen
              ></iframe>
            </div>
          </aside>

          <div className="clearfix"></div>
          <div className="col-md-12">
            <WidgetContactForm></WidgetContactForm>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
