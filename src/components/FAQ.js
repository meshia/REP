import React from 'react';
import Title from '../components/elements/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { GenerateKey } from '../utils/UtilsMain.js';

class FAQ extends React.Component {
    render() {
    const currentData = this.props.item ? this.props.item : '';
    const currentIndex = this.props.index ? this.props.index : '';
    const currentClassName = this.props.className ? this.props.className + ' container' : 'container';

    const toggleCollapse = e => {
      const thisElement = e.target;
      const thisParent = e.target.parentElement;
      const thisArrow = thisElement.getElementsByClassName('arrow-icon').item(0);
      const thisAnswer = thisParent.getElementsByClassName('answer').item(0);
      const allQuestionsItems = thisParent.parentElement.querySelectorAll('.question-item');
      
      if( thisAnswer.classList.contains('closed')) {
        allQuestionsItems.forEach(element => {
          element.querySelector('.answer').classList.add('closed');
          element.querySelector('.arrow-icon').classList.remove('flipped');
        })
        
        thisArrow.classList.add('flipped');
        thisAnswer.classList.remove('closed');
      } else {
        thisArrow.classList.remove('flipped');
        thisAnswer.classList.add('closed');
      }
    }

      return (
        <section className={currentClassName} data-index={currentIndex + 1} key={GenerateKey(currentIndex)}>
          {
            Object.keys(currentData).map( function(key) {
              switch(true) {
                case key === "TYPE":
                  break;
                case  key === "TITLE":
                  return <Title title={currentData[key]}/>
                  case  key === "QUESTIONS":
                    const questions = Object.values(currentData[key]).map( function(value) {
                      const question = <div className='question-item'>
                                          <span className='question' onClick={toggleCollapse}>
                                            {value.QUESTION}
                                            <FontAwesomeIcon className='arrow-icon' icon={faChevronDown} />
                                          </span>
                                          <div className='answer closed'>
                                            <p dangerouslySetInnerHTML={ { __html: value.ANSWER } } />
                                          </div>
                                        </div>;
                      return question
                    })
                    return questions
                case  key === "COMMENT":
                  return <p className="comment" dangerouslySetInnerHTML={ { __html: currentData[key] } }/>
                default:
                  break;
              }
            })
          }
        </section>
      );
    }
};

export default FAQ;