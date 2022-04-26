import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';


class CreateModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employeeName: null,
            employeeSalary: null
        }
    }

    // Create employee name state
    inputEmployeeName = (e) => {
        this.setState({
            employeeName: e.target.value
        });
    }

    // Create employee salary data
    inputEmployeeSalary = (e) => {
        this.setState({
            employeeSalary: e.target.value
        });
    }

    // Storing employee data
    storeEmployeeData = () => {
        axios.post('/store/employee/data', {
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary
        }).then(() => {
            toast.success('Employee Saved Successfully!');

            setTimeout(() =>{
                location.reload();
            }, 2500)
        })
    }

    render() {
        return (
            <>
                <div className='row text-right mb-3 pb-3'>
                    <button className="btn btn-info text-right col-3 offset-md-9"
                        data-toggle="modal"
                        data-target="#modalCreate"
                    >
                        Add New Employee
                    </button>
                </div>
                <div className="modal fade" id={"modalCreate"} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Employee Details</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                        <div className="modal-body">
                            <form className="form">
                                <div className="form-group">
                                    <input type="text" 
                                        id="employeeName"
                                        placeholder="Name here"
                                        onChange={this.inputEmployeeName}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="text" 
                                        id="employeeSalary"
                                        placeholder="Salary here"
                                        onChange={this.inputEmployeeSalary}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                                    <input type="button" 
                                        value="Save"
                                        onClick={this.storeEmployeeData}
                                    />
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CreateModal;