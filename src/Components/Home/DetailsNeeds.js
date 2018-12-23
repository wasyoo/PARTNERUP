import React, { Component } from 'react'
import Rating from '../Profile/Rating'

export class DetailsNeeds extends Component {
  render() {
    return (
      <div className="details-needs">
        <div className="row">
            <div className="col-md-4">
                <div className="details-needs-startup">
                    <div className="details-needs-startup-top-info">
                        <img src="https://www.designevo.com/res/templates/thumb_small/black-disc-and-headphone.png" alt=""/>
                        <div className="details-needs-startup-name-rating">
                            <h1>company name</h1>
                            <Rating rating="3"/>
                        </div>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, at sed stet facilisis suscipiantur. At quo graeci apeirian sensibus, at mei saepe partem vituperatoribus, sed mundi essent at. Ei est dicit possit noluisse. Ius velit docendi accumsan et, ei his vero scripta postulant. Suas latine te duo, sit ut virtute vivendum. Graeci oportere nec et, aperiri accusamus interesset sed ut. Delicata pertinacia eu pri, eos an aperiam reprimique.
                    </p>
                </div>
            </div>
            
            <div className="col-md-8">
                <div className="details-needs-box">
                    <div className="details-needs-title-date">
                        <h2>Lorem ipsum dolor sit amet, at sed stet facilisis suscipiantur</h2>
                        <span>2018/12/23</span>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, at sed stet facilisis suscipiantur. At quo graeci apeirian sensibus, at mei saepe partem vituperatoribus, sed mundi essent at. Ei est dicit possit noluisse. Ius velit docendi accumsan et, ei his vero scripta postulant. Suas latine te duo, sit ut virtute vivendum. Graeci oportere nec et, aperiri accusamus interesset sed ut. Delicata pertinacia eu pri, eos an aperiam reprimique.
                    </p>
                </div>
            </div>

            <div className="col-md-12">
                <form action="">
                    <div class="form-group">
                        <textarea className="form-control" name="" id="" rows="4"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Envoyer</button>
                </form>
            </div>

        </div>
      </div>
    )
  }
}

export default DetailsNeeds
