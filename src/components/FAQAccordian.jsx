import React, { useRef, useState } from 'react';
import './FAQAccordian.css'

const faqs = [
    {
        id: 1,
        header: "What is Juna?",
        text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
    },
    {
        id: 2,
        header: "Juna Tokenization Process",
        text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `
    },
    {
        id: 3,
        header: "Juna Tokenization Process",
        text: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,`
    },
    {
        id: 4,
        header: "Juna Tokenization Process",
        text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`
    }
]

const AccordionItem = (props) => {
    const contentEl = useRef();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;
  
    return (
      <div className="rc-accordion-card">
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`}
          onClick={() => handleToggle(id)}
        >
          <i className={`rc-accordion-icon ${active === id ? 'minus' : 'plus'}`}></i>
          <h5 className="rc-accordion-title">{header}</h5>
        </div>
        <div
          ref={contentEl}
          className={`rc-collapse ${active === id ? 'show' : ''}`}
          style={
            active === id
              ? { height: contentEl.current.scrollHeight }
              : { height: '0px' }
          }
        >
          <div className="rc-accordion-body">
            <p className="mb-0">{text}</p>
          </div>
        </div>
      </div>
    );
  };
  
  function FAQAccordion() {
    const [active, setActive] = useState(null);
  
    const handleToggle = (index) => {
      if (active === index) {
        setActive(null);
      } else {
        setActive(index);
      }
    };
  
    return (
      <>
      <div className="faq-container">
        <div className="head-container">
            <h4 className="head">FAQs</h4>
            <p className="headText">Questions about Juna? Explore our FAQs for answers.</p>

        </div>
            <div className="container-fluid  mb-5">
            <div className="row ">
                <div className="col-md-8 mt-2">
                <div className="card">
                    <div className="card-body">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                        key={index}
                        active={active}
                        handleToggle={handleToggle}
                        faq={faq}
                        />
                    ))}
                    </div>
                </div>
                </div>
            </div>
            </div>
      </div>
      </>
    );
  }
  
  export default FAQAccordion;