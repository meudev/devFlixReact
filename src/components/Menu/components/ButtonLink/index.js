import React from 'react';

function ButtonLink(props) {
  // props => { className: "O que alguém passar", href: "/" }
  return (
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonLink;