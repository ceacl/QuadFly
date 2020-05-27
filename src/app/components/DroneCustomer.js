import React, {Component} from "react";

class DroneDetails extends Component 
{
    render()
    { 
        return(
        
        <div>
            <button id="modalActivate" type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModalPreview">
            Full Screen Modal
            </button>


            <div className="modal fade top" id="exampleModalPreview"  role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true">
            <div className="modal-dialog-full-width modal-dialog momodel modal-fluid" role="document">
            <div className="modal-content-full-width modal-content ">
            <div className=" modal-header-full-width   modal-header text-center">
                <h5 className="modal-title w-100" id="exampleModalPreviewLabel">title</h5>
                <button type="button" className="close " data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <h1 className="section-heading text-center wow fadeIn my-5 pt-3"> Description</h1>
            </div>
            <div className="modal-footer-full-width  modal-footer">
                <button type="button" className="btn btn-dark btn-md btn-rounded" data-dismiss="modal">Close</button>
            </div>
            </div>
            </div>
            </div>
        </div>
        
        );
    }
}

export default DroneDetails;