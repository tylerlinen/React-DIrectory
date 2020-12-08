//Class based component, This gets the information 
import React, { Component } from "react"
import API from "../utils/API"
import DataTable from "./Table";
import Navbar from "./Navbar";


class DataArea extends Component {
    state = {
        users: [{}],
        filteredUsers: [{}]

    }

    componentDidMount() {
        API.getUsers().then(res => {
            console.log(res)
            this.setState({
                users: res.data.results,
                filteredUsers: res.data.results
            }) 
            console.log(this.state.users)
        })
    }
    handleSearchChange = event => {
        console.log(event.target.value)
        const filter = event.target.value;
        const combinedList = this.state.users.filter(item => {
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1
        })
        console.log(combinedList)
        this.setState({filteredUsers: combinedList})
    }

    render() {
        return (
           <>
                <Navbar handleSearchChange={this.handleSearchChange}/>
                <DataTable
                users={this.state.filteredUsers}
                
                />
            </>
            // this is where our JSX goes
        )
    }
}

export default DataArea;