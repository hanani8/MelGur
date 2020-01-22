import React, { Component } from 'react';
import Image from './image.jsx';
import Popup from "reactjs-popup";


class Images extends Component {
    state = { 
        images : [
            {id: 1, value : "http://placehold.it/240x240"},
            {id :2, value: "http://placehold.it/240x260"},
            {id: 3, value : "http://placehold.it/240x260"},            
            // {id: 4, value : "http://placehold.it/240x260"},
            // {id: 5, value : "http://placehold.it/240x260"},
            // {id: 6, value : "http://placehold.it/240x260"},
            // {id: 7, value : "http://placehold.it/240x260"},
            // {id: 8, value : "http://placehold.it/240x260"},
            // {id: 9, value : "http://placehold.it/240x260"}
            
        ]
     }

    newPost = () => {
        // console.log(typeof this.state.images);
        // console.log(this.state.images.push({ id: this.state.images[this.state.images.length - 1].id + 1, value: "http://placehold.it/260x260" }));
        // console.log(this.state.images);
        // // const images = this.state.images.push({ id: this.state.images[this.state.images.length - 1].id + 1, value: "http://placehold.it/260x260" });
        // // this.setState({images : images});
       
        const {images} = this.state;
        images.push({ id: this.state.images[this.state.images.length - 1].id + 1, value: "http://placehold.it/260x260" });
        this.setState({images})
        
    }

    handleChange = (event) => {
        const {images} = this.state;
        images.push({ id: this.state.images[this.state.images.length - 1].id + 1, value: event.target.value });
        this.setState({images})
        // this.setState({value: event.target.value});
    }

    handleSubmit = (event)  => {
        // alert('A Image was submitted: ' + event.target.value);
        
        event.preventDefault();
      }
    

    render() { 
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">MelGur</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <button onClick={this.newPost} className="btn btn-primary btn-md">NewPost+
                            </button>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Popup trigger={<button className="btn btn-danger btn-md"> NewPost++</button>}>
                            <div><form onSubmit={this.handleSubmit}>
                                 <label>
                                  ImageURL:
                                <input type="text" value={this.state.value} onChange={this.handleChange} />
                                </label>
                                <input type="submit" value="Submit" />
                                </form></div>
                            </Popup>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>
                </nav>
            <div className="row row-cols-1 row-cols-md-5" >
                {this.state.images.map(image => <Image key={image.id} src={image.value} id={image.id} selected={true}/>)}
            </div>
            
            </div>
        );
    }
}
 
export default Images;