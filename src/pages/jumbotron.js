import React, { Component } from 'react'


export default class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div className="topbody">
                    <section className="hero home-top-banner">

                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10">
                                    <div className="hero-content">
                                        <h1 className="hero-heading light-weight"> africa’s largest online academic library </h1>
                                        <h4 className="hero-subheading"> Join and access research works </h4>

                                        <form method="GET" action="" >
                                            <div className="input-group">
                                                <input type="text" name="search" id="search" className="form-control form-control-lg" placeholder="Enter topic or keywords and search" />

                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-primary btn-lg">Search</button>
                                                </div>
                                            </div>
                                        </form>

                                        <a href="" className="btn mt-4 btn-warning"> Upload your paper </a>

                                        <ul className="hero-footnote mt-3">
                                            <li> Publish your academic papers to reach thousands of scholars </li>
                                            <li> Search high quality projects, essays/papers, seminars and lecture notes etc </li>
                                            <li> Access academic works from over 150,000 scholars </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
