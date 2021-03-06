import React, { Component } from 'react';

class Concert extends Component {

  render() {
    return (
      <div className="card">
        <img style={{ width: "350px" }} src={this.props.artist.image} />
        <h3>Concert Date: {this.props.artist.concert_dates.map(concertDate => <div>{concertDate.date}</div>)}</h3>
        <h2>Artist: {this.props.artist.name}</h2>
        <h2>Genre: {this.props.artist.genre}</h2>
        <p>Years Active: {this.props.artist.years_active}</p>
        <button className="del-btn">Buy Tickets</button>
        <br></br>
        <button onClick={()=>this.props.deleteConcert(this.props.artist)} className="del-btn">Cancel Concert</button>
        <br></br>
      </div>
    );
  }

}

export default Concert;