import React, { useState } from 'react'
import './styles/Faq.css'
import FaqImg from '../assets/faq.jpeg'

function Faq() {
  const [selected, setSelected] = useState(null)

  const toggle = (index) => {
    if (selected === index) {
      setSelected(null)
    } else {
      setSelected(index)
    }
  }

  return (
    <div className='faqs'>
      <div className="headerfaq">
        <p className="colored">- FAQ</p>
        <h1><span className="colored underlined">Frequently</span> Asked Questions</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
      </div>
      <div className="questioners">
        <div className="questioner">
          {Data.map((item, index) => {
            return (
              <div className="question" key={index}>
                <div className="head" onClick={() => toggle(index)}>
                  <h3>{item.question}</h3>
                  <span>{selected === index ? '-' : '+'}</span>
                </div>
                {selected === index && <div className="body">{item.answer}</div>}
              </div>
            )
          })}
        </div>
        <img src={FaqImg} alt="FAQ" />
      </div>
    </div>
  )
}

const Data = [
  {
    question: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit.',
    answer: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    question: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit.',
    answer: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    question: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit.',
    answer: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    question: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit.',
    answer: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  },
  {
    question: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit.',
    answer: 'Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
  }
]

export default Faq
