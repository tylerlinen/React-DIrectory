//Class based component, This gets the information 
import React, { Component } from "react"
import API from "../utils/API"
import DataTable from "./Table";
import TableHeading from "./THead"

class DataArea extends Component {
    state = {
        users: [{}]
    }

    componentDidMount() {
        API.getUsers().then(res => {
            console.log(res)
            this.setState({
                users: res.data.results
            }) 
            console.log(this.state.users)
        })
    }

    render() {
        return (
           <>
                <TableHeading />
                <DataTable
                users={this.state.users}
                
                />
            </>
            // this is where our JSX goes
        )
    }
}

export default DataArea;