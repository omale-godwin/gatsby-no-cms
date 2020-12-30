import React from 'react'

export default function News() {
    return (
        <div>
            <div className="col-12 mx-auto">
     
      <div className="card p-3 bg-hue-red no-border">
        <div className="row">
          <div className="col-md-6 col-12 mx-auto">
            <h5 className="p-2 text-left">Subscribe to us!</h5>
            <p className="p-2 text-left">We send amazing newletter every monday! designer have always loved those.</p>
          </div>
          <div className="col-md-6 align-center justify-center col-sm-12">
            <div className="input-group input-group-lg">
              <input type="text" className="form-control no-border cwhite op-3" placeholder="Your email here"/>
              <span className="input-group-btn">
                <button className="btn btn-danger" type="button"><i className="fa fa-chevron-right"></i></button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
