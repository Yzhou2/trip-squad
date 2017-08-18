import React, { Component } from 'react';
import axios from 'axios';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Gender: null,
      Squad_Status: null,
      City: null,
      Country: null,
      Birthday: null,
      Smoker: null,
      Drinker: null,
      DSTolerance: null,
      AvaliableForHostDinner: null,
      TypeOfTraveller: null,
      Occupation: null,
      Tags: null,
      visited_countries: null,
      Fluent_Languages: null,
      Description: null

    }
  this.handleChangeGender = this.handleChangeGender.bind(this);
  this.handleChangeSquadStatus = this.handleChangeSquadStatus.bind(this);
  this.handleChangeCity = this.handleChangeCity.bind(this);
  this.handleChangeCountry = this.handleChangeCountry.bind(this);
  this.handleChangeSmoker = this.handleChangeSmoker.bind(this);
  this.handleChangeDrinker = this.handleChangeDrinker.bind(this);
  this.handleChangeDSTolerance = this.handleChangeDSTolerance.bind(this);
  this.handleChangeHostDinner = this.handleChangeHostDinner.bind(this);
  this.handleChangeTypeOfTraveller = this.handleChangeTypeOfTraveller.bind(this);
  this.handleChangeVisitedCountries = this.handleChangeVisitedCountries.bind(this);
  this.handleChangeFluentLanguages = this.handleChangeFluentLanguages.bind(this);
  this.handleChangeDescription = this.handleChangeDescription.bind(this);
  this.handleChangeOccupation = this.handleChangeOccupation.bind(this);
  this.handleChangeTags = this.handleChangeTags.bind(this);
  this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    axios.put('http://localhost:3001/api/editprofile', {
      Gender: this.state.Gender,
      Squad_Status: this.state.Squad_Status,
      City: this.state.City,
      Country: this.state.Country,
      Smoker: this.state.Smoker,
      Drinker: this.state.Drinker,
      DSTolerance: this.state.DSTolerance,
      AvaliableForHostDinner: this.state.AvaliableForHostDinner,
      TypeOfTraveller: this.state.TypeOfTraveller,
      Occupation: this.state.Occupation,
      Description: this.state.Description,
      visited_countries: this.state.visited_countries,
      Fluent_Languages: this.state.Fluent_Languages,

    }, {withCredentials:true}).then(res => res);

    this.props.closePop()
  }


  handleChangeGender(event) {
    this.setState({
      Gender: event.target.value
    })
  }

  handleChangeSquadStatus(event) {
    this.setState({
      Squad_Status: event.target.value
    })
  }

  handleChangeCity(event) {
    this.setState({
      City: event.target.value
    })
  }

  handleChangeCountry(event) {
    this.setState({
      Country: event.target.value
    })
  }

  handleChangeSmoker(event) {
    this.setState({
      Smoker: event.target.value
    })
  }

  handleChangeDrinker(event) {
    this.setState({
      Drinker: event.target.value
    })
  }

  handleChangeDSTolerance(event) {
    this.setState({
      DSTolerance: event.target.value
    })
  }

  handleChangeHostDinner(event) {
    this.setState({
      AvaliableForHostDinner: event.target.value
    })
  }

  handleChangeTypeOfTraveller(event) {
    this.setState({
      TypeOfTraveller: event.target.value
    })
  }

  handleChangeVisitedCountries(event) {
    this.setState({
      visited_countries: event.target.value
    })
  }

  handleChangeFluentLanguages(event) {
    this.setState({
      Fluent_Languages: event.target.value
    })
  }

  handleChangeDescription(event) {
    this.setState({
      Description: event.target.value
    })
  }

  handleChangeOccupation(event) {
    this.setState({
      Occupation: event.target.value
    })
  }

  handleChangeTags(event) {
    this.setState({
      Tags: event.target.value
    })
  }

  // <div className="edirFormSection">
  //   <p>My Interests</p>
  //   <input onChange={this.handleChangeTags} className="barInput"></input>
  // </div>


  render() {
    console.log(this.state)
      return (
        <div className="editProfile">
          <div className="editprofileTitle"><span>Edit Profile</span></div>


          <div className="updatePicContainer">
            <div className="updatePic"><img src={this.props.profile_img_url} alt="fixed" /></div>
            <div className="camera">
              <i className="fa fa-camera" aria-hidden="true"></i>
            </div>
          </div>  








          <div className="editForm">
            <div className="edirFormSection">
              <div>Ready To Join Squads?</div>
              <select onChange={this.handleChangeSquadStatus} className="formInput">
                <option>yes</option>
                <option>maybe</option>
                <option>no</option>
              </select>
            </div>


            <div className="edirFormSection">
              <div>Avaliable To host Squads for dinner?</div>
              <select onChange={this.handleChangeHostDinner} className="formInput">
                <option>yes</option>
                <option>no</option>
              </select>
            </div>


            <div className="edirFormSection">
              <div>Gender</div>
              <select onChange={this.handleChangeGender} className="formInput">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="edirFormSection">
              <p>Where I live</p>
              <div>
                <input placeholder="city" onChange={this.handleChangeCity} className="bdInput"></input>
                <input placeholder="country" onChange={this.handleChangeCountry} className="bdInput"></input>
              </div>
            </div>

            <div className="edirFormSection">
              <p>Countries Visited</p>
              <input onChange={this.handleChangeVisitedCountries} className="barInput"></input>
            </div>

            <div className="edirFormSection">
              <p>Language Spoken</p>
              <input onChange={this.handleChangeFluentLanguages} className="barInput"></input>
            </div>

            <div className="edirFormSection">
              <p>Birthday</p>
              <div>
                <input placeholder="day" className="adInput"></input>
                <input placeholder="month" className="adInput"></input>
                <input placeholder="year" className="adInput"></input>
              </div>
            </div>

            <div className="edirFormSection">
              <p>Occupation</p>
              <input onChange={this.handleChangeOccupation} className="barInput"></input>
            </div>


            <div className="edirFormSection">
              <p>Do You Smoke?</p>
              <select onChange={this.handleChangeSmoker} className="formInput">
                <option>yes</option>
                <option>no</option>
              </select>
            </div>

            <div className="edirFormSection">
              <p>Do You Drink?</p>
              <select onChange={this.handleChangeDrinker} className="formInput">
                <option>yes</option>
                <option>maybe</option>
                <option>no</option>
              </select>
            </div>

            <div className="edirFormSection">
              <p>Do You Mind Hanging Out with People who Smoke/Drink?</p>
              <select onChange={this.handleChangeDSTolerance} className="formInput">
                <option>yes</option>
                <option>maybe</option>
                <option>preferablely not</option>
                <option>I dont mind drinking but I do mind smoking</option>
                <option>I dont mind smoking but I do mind drinking</option>
              </select>
            </div>

            <div className="edirFormSection">
            <p>What Type Of Traveller Are You?</p>
            <select onChange={this.handleChangeTypeOfTraveller} className="formInput">
              <option>budget</option>
              <option>adventure</option>
              <option>luxuryvocation</option>
            </select>
            </div>

            <div className="edirFormSection">
              <p>About Me</p>
              <input onChange={this.handleChangeDescription} className="barInput"></input>
            </div>

          </div>

          <div className="createBtn">
            <button onClick={ this.handleClick }>Save</button>
            <button onClick={()=>{this.props.closePop()} } >Cancel</button>
          </div>

        </div>

      )
    }
}
