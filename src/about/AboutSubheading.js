import classNames from 'classnames'
import React, { Component } from 'react'
import "../styles/aboutMenu.css"

const AboutSubheading = ({title, content, active, onClick, menuItem}) => {
  const subContainerClass = `sub-container-${menuItem}`
    return (
      <div className={classNames(subContainerClass, {"active-subheading": active})} onClick={onClick}>
        <h3 onClick={onClick}>{title}</h3>
        <div className='p-container'>{content}</div>
      </div>
    );
}

export default AboutSubheading;