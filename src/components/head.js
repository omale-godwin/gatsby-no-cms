import React, { Component } from 'react'

export default class Head extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="container">
                        <div className="row">
                            <div className="col s3">
                                <div className="content-left">
                                    <a href="#slide-out" data-activates="slide-out" className="sidebar">
                                        <i className="fa fa-bars"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col s6">
                                <div className="content-center">
                                    <a href="index.html">
                                        <h1>M-PLAY</h1>
                                    </a>
                                </div>
                            </div>
                            <div className="col s3">
                                <div className="content-right">
                                    <a href="#slide-out-right" data-activates="slide-out-right" className="sidebar-search">
                                        <i className="fa fa-search"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sidebar-panel">
                    <ul id="slide-out" className="collapsible side-nav">
                        <li>
                            <div className="user-view">
                                <div className="background">
                                    <img src="images/bg-banner.jpg" alt="" />
                                </div>
                                <img className="circle responsive-img" src="images/profile.png" alt="" />
                                <span className="white-text name">John Roe</span>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header">
                                <i className="fa fa-home"></i>Home
                    <span>
                                    <i className="fa fa-caret-right"></i>
                                </span>
                            </div>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                        <a href="index.html">Home v1</a>
                                    </li>
                                    <li>
                                        <a href="index2.html">Home v2</a>
                                    </li>
                                    <li>
                                        <a href="index3.html">Home v3</a>
                                    </li>
                                    <li>
                                        <a href="index4.html">Home v4</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header">
                                <i className="fa fa-list"></i>Categories
                    <span>
                                    <i className="fa fa-caret-right right"></i>
                                </span>
                            </div>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                        <a href="categories.html">Categories</a>
                                    </li>
                                    <li>
                                        <a href="categories-page.html">Categories page</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header">
                                <i className="fa fa-play"></i>Video Single
                    <span>
                                    <i className="fa fa-caret-right right"></i>
                                </span>
                            </div>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                        <a href="video-single.html">Video Single v1</a>
                                    </li>
                                    <li>
                                        <a href="video-single2.html">Video Single v2</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="channel.html">
                                <i className="fa fa-user"></i>Channel</a>
                        </li>
                        <li>
                            <div className="collapsible-header">
                                <i className="fa fa-rss-square"></i>Blog
                    <span>
                                    <i className="fa fa-caret-right right"></i>
                                </span>
                            </div>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="blog-single.html">Blog Single</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header">
                                <i className="fa fa-support"></i>Components
                    <span>
                                    <i className="fa fa-caret-right right"></i>
                                </span>
                            </div>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                        <a href="accordion.html">Accordion</a>
                                    </li>
                                    <li>
                                        <a href="button.html">Button</a>
                                    </li>
                                    <li>
                                        <a href="calendar.html">Calendar</a>
                                    </li>
                                    <li>
                                        <a href="card.html">Card</a>
                                    </li>
                                    <li>
                                        <a href="collapse.html">Collapse</a>
                                    </li>
                                    <li>
                                        <a href="list.html">List</a>
                                    </li>
                                    <li>
                                        <a href="pagination.html">Pagination</a>
                                    </li>
                                    <li>
                                        <a href="table.html">Table</a>
                                    </li>
                                    <li>
                                        <a href="tabs.html">Tabs</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="collapsible-header">
                                <i className="fa fa-file"></i>Pages
                    <span>
                                    <i className="fa fa-caret-right right"></i>
                                </span>
                            </div>
                            <div className="collapsible-body">
                                <ul>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                    <li>
                                        <a href="gallery.html">Gallery</a>
                                    </li>
                                    <li>
                                        <a href="pricing-table.html">Pricing Table</a>
                                    </li>
                                    <li>
                                        <a href="page-not-found.html">Page Not Found</a>
                                    </li>
                                    <li>
                                        <a href="settings.html">Settings</a>
                                    </li>
                                    <li>
                                        <a href="sign-up.html">Sign Up</a>
                                    </li>
                                    <li>
                                        <a href="sign-in.html">Sign In</a>
                                    </li>
                                    <li>
                                        <a href="team.html">Team</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="contact.html">
                                <i className="fa fa-envelope-o"></i>Contact Us</a>
                        </li>
                        <li>
                            <a href="sign-in.html">
                                <i className="fa fa-sign-in"></i>Sign In</a>
                        </li>
                        <li>
                            <a href="sign-up.html">
                                <i className="fa fa-user-plus"></i>Sign Up</a>
                        </li>
                        <li>
                            <a href="index.html">
                                <i className="fa fa-share"></i>Log Out</a>
                        </li>
                    </ul>
                </div>

                <div className="sidebar-panel sidebar-search">
                    <ul id="slide-out-right" className="collapsible side-nav">
                        <li>
                            <div className="form">
                                <input type="search" />
                                <button className="button">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                            <div className="clear"></div>
                        </li>
                        <li>
                            <h5>Popular Search</h5>
                        </li>
                        <li>
                            <a href="">Football</a>
                        </li>
                        <li>
                            <a href="">Entertainment</a>
                        </li>
                        <li>
                            <a href="">Funny</a>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}
