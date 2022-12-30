import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { mediaUrl } from "../services/constants";
import { getWidgetHomePagestestimonials, getwidgetsData } from "./http-service";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Testimonials() {
  const [testimonials, settestimonials] = useState(undefined);
  const [activeTestimonial, setactiveTestimonial] = useState(undefined);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const setactiveTestimonialAndOpenModal = (testimonial) => {
    setactiveTestimonial(testimonial);
    openModal();
  };

  useEffect(() => {
    getwidgetsData().then(() => {
      settestimonials(getWidgetHomePagestestimonials());
    });
  }, []);

  const items = testimonials?.content.map((testimonial, i) => {
    return (
      <div className="testimonial-container brown_color">
        <div className="testimonial-image">
          <img
            className="home_page_slider_testmonial"
            key={i}
            src={mediaUrl + testimonial.avatar}
            role="presentation"
          />
        </div>
        <div className="testimonial-body my_alice-carousel__wrapper">
          <h5> {testimonial.name} </h5>
          <br></br>
          <span
            className="read_more_testi"
            dangerouslySetInnerHTML={{ __html: testimonial.text }}
          ></span>
        </div>
        <div>
          <span
            className="read_more"
            onClick={() => setactiveTestimonialAndOpenModal(testimonial)}
          >
            Read more
          </span>
        </div>
      </div>
    );
  });

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <div className="close-button-section" onClick={closeModal}>
          <strong>X</strong>
        </div>
        <div className="testimonial-modal-container">
          <div className="testimonial-modal-image">
            <img
              src={mediaUrl + activeTestimonial?.avatar}
              role="presentation"
            />
          </div>

          <div className="testimonial-modal-body">
            <h5 classNme="testi_name">{activeTestimonial?.name}</h5>
            <br></br>
            <span
              dangerouslySetInnerHTML={{ __html: activeTestimonial?.text }}
            ></span>
          </div>
        </div>
      </Modal>
      <AliceCarousel
        // autoPlay={true}
        infinite={true}
        mouseTracking
        items={items}
        controlsStrategy="alternate"
        disableButtonsControls={true}
        disableDotsControls={true}
        animationDuration={1500}
        autoPlayInterval={4000}
      />
    </>
  );
}

export default Testimonials;
