import React from 'react';
import Title from '../components/elements/Title';

export function getData(data) {
  this.setState({ error: false, loading: true });
  return parseData(data)
    .then(data => {
      this.setState({ data });
    })
    .catch(err => {
      this.setState({ error: true });
    })
    .finally(() => {
      this.setState({ loading: false });
    });
}
class Modal extends React.Component {
    state = { 
      data: null,
      loading: false,
      error: false
    };

    componentDidMount() {
      getData.call(this, this.props.data);
    }

    componentDidUpdate(prevProps) {
      if (this.props.data !== prevProps.data) {
        getData.call(this, this.props.data);
      }
    }

    render() {
      const data = this.state.data;
      return (
        <div className="Modal">
         <span className="overlay"></span>
         <div className="popup-window">
                <span className='popup-close' onClick={closeModal}>X</span>
                <div className='popup-content'>
                  { data && Object.keys(data).length > 0 
                    ? Object.keys(data).map( function(key, index) {
                      switch(true) {
                        case  key === "TITLE":
                          return <Title title={data[key]}/>
                        case  key.indexOf("CONTENT") !== -1:
                          const currentItem = data[key];
                          const importedComponentModule = require("./HtmlFromJson").default;
                          return React.createElement(importedComponentModule, {item:currentItem, 'wrapper': 'div'});
                        default:
                          break;
                      }
                      })
                    : <div>Loading...</div>
                  }
                </div>
         </div>
      </div>
      );
    }
  }

  export default Modal;

  export function parseData(data) {
    return new Promise((resolve, reject) => {
        if (data !== "") {
          resolve(data);
        } else {
          reject();
        }
    });
  }

  export const closeModal = () => {
    const modalElement = document.querySelector('.Modal');
    const currentBody = document.querySelector('body');
    currentBody.classList.remove('fixed');
    modalElement.classList.remove('open');
  }

  export const openModal = () => {
    const modalElement = document.querySelector('.Modal');
    const currentBody = document.querySelector('body');
    currentBody.classList.add('fixed');
    modalElement.classList.add('open');
  }