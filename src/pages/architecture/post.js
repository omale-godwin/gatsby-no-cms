import React, { Component } from 'react'
import Layout from '../../components/Layout'
import data from '../../categories/architectures.json'
import parser from 'html-react-parser'

export default class posts extends Component {
 
 
  render() {
    const id = sessionStorage.getItem('postid')
    console.log(id);
    return (
      <Layout>
      <div className="container">
          <h1>{data[id - 1].title}</h1>
          <br /><br />
          {parser(data[id - 1].content.replace(/\n/gi, "<br />"))};
      
          </div>
        </Layout>
    )
  }
}
