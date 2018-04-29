import React, { Component } from 'react';
import logo from './logo.svg';
import StudentList from './studentList'
import ListItem from './listItem'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      valueOfFName:"",
      valueOfLName:"",
      valueOfDefaultActivity:"",
      checkIndoorItem:false,
      checkOutdoorItem:false,
      checkPoolItem:false,
      items:[]
    };

    this.handelFirstName= this.handelFirstName.bind(this);
    this.handelLastName = this.handelLastName.bind(this);
    this.handelDefaultActivity = this.handelDefaultActivity.bind(this);
    this.handleIndoorType = this.handleIndoorType.bind(this);
    this.handleOutdoorType=  this.handleOutdoorType.bind(this);
    this.handlePoolType = this.handlePoolType.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.removeSingleStudent = this.removeSingleStudent.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }


  handelFirstName(event){
    this.setState({
      valueOfFName:event.target.value
    });
  }
  handelLastName(event){
    this.setState({
      valueOfLName:event.target.value
    });
  }
  handelDefaultActivity(event){
    this.setState({
      valueOfDefaultActivity:event.target.value
    });
  }
  handleIndoorType(event){
    this.setState({
      checkIndoorItem:event.target.checked
    });
  }
  handleOutdoorType(event){
    this.setState({
      checkOutdoorItem:event.target.checked
    });
  }
  handlePoolType(event){this.setState({checkPoolItem:event.target.checked});}

  addStudent(){
    var stdCopy=this.state.items.slice()
    stdCopy.push({
      valueOfFName:this.state.valueOfFName,
      valueOfLName:this.state.valueOfLName,
      valueOfDefaultActivity:this.state.valueOfDefaultActivity,
      checkIndoorItem:this.state.checkIndoorItem,
      checkOutdoorItem:this.state.checkOutdoorItem,
      checkPoolItem:this.state.checkPoolItem

    })
    this.setState({items:stdCopy});
    this.resetForm();
  }

  removeSingleStudent(index){
    var stdDelete = this.state.items.slice()
    stdDelete.splice(index,1);
    this.setState({items:stdDelete})
  }

  resetForm () {
    this.setState ({
      valueOfFName:"",
      valueOfLName:"",
      valueOfDefaultActivity:"table-tenis",
      checkIndoorItem:false,
      checkOutdoorItem:false,
      checkPoolItem:false,
    });       
} 


  render() {
    return (
      <div>
        <h2>Sports Activity</h2>

        <div>
          <div>First Name </div>
          <input value={this.state.valueOfFName} onChange={this.handelFirstName}/>

          <div>Last Name </div>
          <input value={this.state.valueOfLName} onChange={this.handelLastName}/>
        </div>       

        <div>
          <h4>current activity</h4>
          <select value={this.state.valueOfDefaultActivity} onChange={this.handelDefaultActivity}>
            <option value="table-tenis">Table-tenis</option>
            <option value="cricket">Cricket Game</option>
            <option value="swimming">Swimming</option>
          </select>
        </div>

         <div>
          <h4>favorite catagory</h4>
          <input type="checkbox" checked={this.state.checkIndoorItem} onChange={this.handleIndoorType}/> Indoor Sports <br/>
          <input type="checkbox" checked={this.state.checkOutdoorItem} onChange={this.handleOutdoorType}/> Outdoor Sports <br/>
          <input type="checkbox" checked={this.state.checkPoolItem} onChange={this.handlePoolType}/> pool Sports <br/>

        </div>

        <div>
          <button onClick={this.addStudent}>Submit</button>
        </div>

        <div>
          <StudentList studentListItem ={this.state.items} removeStudent={this.removeSingleStudent} />
        </div>
      </div>
      
    );
  }
}

export default App;
