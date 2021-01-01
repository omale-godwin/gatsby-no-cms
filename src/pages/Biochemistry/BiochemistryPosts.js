import React, {Component} from 'react'
import parser from 'html-react-parser';
import Layout from '../../components/Layout';
import {Link} from 'gatsby'
import data from '../../categories/biochemistries.json'

export class BiochemistryPosts extends Component {
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
      <div className="alert alert-success no-margin" style={{fontSize: '16px'}}>
                <i className="fa fa-file-text"></i>&nbsp;Format: <b>MS WORD</b>&nbsp;::&nbsp;
                <i className="fa fa-folder-open"></i>&nbsp;Chapters: <b>1-5</b>&nbsp;::&nbsp;
              
                <i className="fa fa-chain"></i>&nbsp;Attributes: <b>Questionnaire, Data Analysis</b>
                                    ::&nbsp;
              
                <i className="fa fa-group"></i>&nbsp;<b>4,921 </b> people found this useful
                              
                <div className="text-center">
                  <Link to="" id="get" className="btn btn-lg btn-warning" >Get the complete project »</Link>
                </div>
            </div>
    
     
            <h1 className="alert alert-info text-center" style={{fontSize:'18px'}}>{data[this.state.postid - 1].title}</h1>
                 <br /><br />
          {parser(data[this.state.postid - 1].content.replace(/\n/gi, "<br />"))};
      
          </div>
        </Layout>
    </div>
  )}}
}

export default BiochemistryPosts