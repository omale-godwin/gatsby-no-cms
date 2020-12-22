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
                                        <h2 className="hero-heading light-weight"> africa’s largest online Project repository </h2>

                                        <form method="GET" action="" >
                                            <div className="input-group">
                                                <input type="text" name="search" id="search" className="form-control form-control-lg" placeholder="search by keywords or topic" />

                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-primary btn-lg">Search</button>
                                                </div>
                                            </div>
                                        </form>

                                        <a href="" className="btn mt-4 btn-warning"> Upload your paper </a>


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
