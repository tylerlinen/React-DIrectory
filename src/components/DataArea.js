//Class based component, This gets the information 
import React, { Component } from "react"
import API from "../utils/API"

class DataArea extends Component {
    state = {
        users: [{}]
    }

    componentDidMount() {
        API.getUsers().then(function (res) {
            console.log(res)
            this.setState({
                users: res.data
            })
                .catch(err => console.log(err));
        })
    }

    render() {
        return (
            <div>
                Console is ready
            </div>
            // this is where our JSX goes
        )
    }
}

export default DataArea;