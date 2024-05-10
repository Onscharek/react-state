import React, { Component } from 'react'
import PerInfo from './PerInfo'
export default class Person extends Component {
  render() {
    return (
      <div>
        
        <img src={PerInfo.ImgSrc} alt='taswira'/>
<h1>{PerInfo.FullName}</h1>
<h2>{PerInfo.Profession}</h2>
<h3>{PerInfo.Bio}</h3>
      </div>
    )
  }
}
