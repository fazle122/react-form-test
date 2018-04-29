import React, { Component } from 'react';

class ListItem extends React.Component{
    constructor(propos){
        super(propos);
        this.typeRestritions = this.typeRestritions.bind(this);
        this.fav = this.typeRestritions(this.props.indoor,this.props.outdoor,this.props.pool);
    }

    typeRestritions(indoor,outdoor,pool){
        let value="";
        if(indoor)
        value +="indoor,";
        if(outdoor)
        value += "outdoor,";
        if(pool)
        value += "pool";
        return value;
    }

    render(){
        return(
            <tr>
                <td><button onClick={this.props.removeStd}>X</button></td>
                <td>{this.props.fname}</td>
                <td>{this.props.lname}</td>
                <td>{this.props.activity}</td>
                <td>{this.fav}</td>
            </tr>
        );
    }
}

export default ListItem;