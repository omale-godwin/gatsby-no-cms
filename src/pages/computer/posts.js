import React from 'react'
import parser from 'html-react-parser';
import Layout from '../../components/Layout';
import data from '../../categories/computer_sciences.json'

function post() {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get('id');

  return (
    <div>
       <Layout>
      <div className="container">
          <h1>{data[id - 1].title}</h1>
          <br /><br />
          {parser(data[id - 1].content.replace(/\n/gi, "<br />"))};
      
          </div>
        </Layout>
    </div>
  )
}

export default post
