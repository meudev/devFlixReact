import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo_devflix.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.meudev.com.br/">
        <img className="Logo" src={Logo} alt="DevFlix"/>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
