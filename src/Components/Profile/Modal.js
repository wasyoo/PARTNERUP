import React, {Component} from 'react'

export default class Modal extends Component {
    render(){
        return(
            <div className="modal-component">

                <button type="button" className="btn" data-toggle="modal" data-target={"#"+this.props.id}>
                    {this.props.btnText}
                </button>

                <div className="modal fade" id={this.props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">{this.props.btnText}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>

                            <div className="modal-body">
                                <this.props.content/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}