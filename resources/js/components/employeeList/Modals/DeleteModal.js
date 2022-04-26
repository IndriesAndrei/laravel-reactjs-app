import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';

class DeleteModal extends Component {
    constructor(props) {
        super(props);
    }

    // Delete function for employee data
    deleteEmployeeData = (employee) => {
        axios.delete('/delete/employee/data/'+employee).then(() => {
            toast.error("Employee Deleted succesfully!");

            setTimeout(() => {
                location.reload();
            }, 2500);
        })
    }

    render() {
        return (
            <div className="modal fade" id={"deleteModal"+this.props.modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete this Employee data?
                    </div>
                    <div className="modal-footer">
                        <button type="button" 
                            className="btn btn-danger" 
                            data-dismiss="modal" 
                            onClick={() => {this.deleteEmployeeData(this.props.modalId)}}
                        >
                            Yes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default DeleteModal;