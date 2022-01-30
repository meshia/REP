/* Footer */
import React from 'react';
import Logo from './elements/Logo';
import NavMenu from './NavMenu';
import { NavLink } from 'react-router-dom';
import Modal, { openModal } from './Modal';
import LanguageSwitcher from './LanguageSwitcher';
import { withTranslation } from 'react-i18next';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      modalData: {}
    };
    this.setModalDataAndOpen = this.setModalDataAndOpen.bind(this);
  }
  setModalDataAndOpen (data){
    this.setState({
      modalData: data
    });
    openModal();
  }
  render() {
    const { t } = this.props;
    const footerData = this.props.t('FOOTER', { returnObjects: true});
    const footerNavData = footerData['NAV'] ? footerData['NAV'] : "";
    const footerLinks = footerData['LINKS'] ? footerData['LINKS'] : "";
    const currentYear = String(new Date().getFullYear());
    
    return (
      <div className="Footer">
        <Modal data ={ this.state.modalData } />
          <div className="container">
            <div className="footer-col">
              <Logo color={'white'} />
              <span className="address 1">{ footerData['ADDRESS_1'] }</span>
              <span className="address 2">{ footerData['ADDRESS_2'] }</span>
              <a className="email" href="mailto:info@rep-realty.com">info@rep-realty.com</a>
            </div>
            <div className="footer-col">
              <NavMenu />
              { footerLinks["CONTACT_US"] && 
                <nav className="menu-items">
                  <NavLink className="menu-item" to={ footerLinks.CONTACT_US["LINK"] }>{ footerLinks.CONTACT_US["LABEL"] }</NavLink>
                </nav>
              }
              { footerLinks["JOIN_US"] && 
                  <nav className="menu-items">
                    <span class='menu-item' onClick={ () => eval( footerLinks.JOIN_US["ONCLICK"]) } dangerouslySetInnerHTML={ { __html: footerLinks.JOIN_US["LABEL"] } } />
                  </nav>
              }
            </div>
            <div className="footer-col">
              <nav className="menu-items">
              {
                Object.values(footerNavData).map( (item, index) => {
                  const data = t(Object.keys(footerNavData)[index], { returnObjects: true});
                  return <span class='menu-item' onClick={ () => this.setModalDataAndOpen(data) } dangerouslySetInnerHTML={ { __html: item } } />
                })
              }
              </nav>
              <LanguageSwitcher />
            </div>
        </div>
            <p className='copyrights'>{ footerData['COPYRIGHT'] + " " + currentYear} </p>
            <script src="//code.tidio.co/5tanwlrageeeltrswvxmgz1hggamh4lm.js" async></script>
      </div>
    )
  }
}

export default  withTranslation('main')(Footer);