import React, { Component } from 'react'
import "./Workspace.css"
import Navbar from '../../components/Navbar/Navbar'

export default class Workspace extends Component {
  render() {
    return (
      <>
        <Navbar></Navbar>
        <p className='test'>testing</p>
      </>
    )
  }
}
