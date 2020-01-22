import React, { Component } from 'react';

class Image extends Component {
    state = {  }
    render() { 
        return ( 
            
            <div className="col mb-4" style={{ width: "18rem" }}>
            <img className="card-img-top img-fluid" src={this.props.src} alt="Card image cap"></img>
                <div className="card-body">

                <p className="card-text">Some defining statement of the above media.</p>
                <a href="#" className="btn btn-primary">Likes and Comments, go here</a>
                </div>
                
            </div>
         );
    }
}
 
export default Image