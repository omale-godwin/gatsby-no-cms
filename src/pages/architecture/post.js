import React, {Component} from 'react'
import parser from 'html-react-parser';
import Layout from '../../components/Layout';
import data from '../../categories/architectures.json'

export class Post extends Component {
  constructor (){
    super()
    this.state = {
    postid: ''
    }
  };

  componentDidMount(){
    const search = window.location.search;
    const params = new URLSearchParams(search);
    this.setState({postid: params.get('id')});
  
  }
  render(){
    if(this.state.postid == null || this.state.postid == undefined || this.state.postid == ''){
      return(
        <div>
          <h1>loading</h1>
        </div>
      )
    }else{

  return (
    <div>
       <Layout>
      <div className="container">
          <h1>{data[this.state.postid - 1].title}</h1>
          <br /><br />
          {parser(data[this.state.postid - 1].content.replace(/\n/gi, "<br />"))};
      
          </div>
        </Layout>
    </div>
  )}}
}

export default Post
