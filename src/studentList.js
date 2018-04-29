import React, { Component } from 'react';
import ListItem from './listItem'

class StudentList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Remove Student</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Activity</th>
                            <th>Favorite</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.studentListItem.map((item,index) =>
                            <ListItem key={index}
                                      fname ={item.valueOfFName}
                                      lname={item.valueOfLName}
                                      activity={item.valueOfDefaultActivity}
                                      indoor={item.checkIndoorItem}
                                      outdoor={item.checkOutdoorItem}
                                      pool={item.checkPoolItem}
                                      removeStd={() => this.props.removeStudent(index)}
                            />
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentList;