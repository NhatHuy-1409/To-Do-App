import React, { Component } from 'react'
import { Container } from '../containers/container'
import { ThemeProvider } from 'styled-components';
import { ToDoDarkTheme } from '../Themes/ToDoDarkTheme';
import { ToDoLightTheme } from '../Themes/ToDoLightTheme';
import { Dropdown } from '../Components/Dropdown';
import { Heading1, Heading3 } from '../Components/Heading';
import { TextField } from '../Components/Textfield';
import { Button } from '../Components/Button';
import { Table, Thead, Tr, Th } from '../Components/Table';
import { addTaskAction, CompeleTaskAction, deleteTaskAction, editTaskAction, updateTaskAction } from '../redux/actions/ToDoActions';
import { connect } from 'react-redux'
class ToDoList extends Component {

  state = {
    taskName: '',
    theme: ToDoDarkTheme,
    disable: false
  }
  handleInput = (e) => {
    let { value } = e.target;
    this.setState({
      taskName: value
    })
  }
  handleSubmit = () => {
    let action = addTaskAction(this.state.taskName)
    this.props.dispatch(action)
  }
  deleteTask = (taskName, whichTask) => {
    let action = deleteTaskAction(taskName, whichTask)
    this.props.dispatch(action)
  }
  CompeleTask = (taskName) => {
    let action = CompeleTaskAction(taskName)
    this.props.dispatch(action)
  }
  editTask = (task) => {
    this.setState({
      disable: true
    }, () => {
      let action = editTaskAction(task)
      this.props.dispatch(action)
    })

  }
  updateTask = () => {
    this.setState({
      disable: false
    }, () => {
      let action = updateTaskAction(this.state.taskName)
      this.props.dispatch(action)
    })
  }

  renderTaskToDo = () => {
    return this.props.taskList.map((task, index) => {
      return <Tr key={index}>
        <Th>
          {task.taskName}
        </Th>
        <Th className='text-right'>
          <Button onClick={() => { this.editTask(task) }}><i className="fa fa-edit"></i></Button>
          <Button onClick={() => { this.CompeleTask(task.taskName) }}><i className="fa fa-check"></i></Button>
          <Button onClick={() => { this.deleteTask(task.taskName, 'taskList') }}><i className="fa fa-trash"></i></Button>
        </Th>
      </Tr>
    })
  }
  renderTaskCompleted = () => {
    return this.props.taskDone.map((task, index) => {
      return <Tr key={index}>
        <Th>
          <strike>{task.taskName}</strike>
        </Th>
        <Th className='text-right'>
          <Button onClick={() => { this.deleteTask(task.taskName, 'taskDone') }}><i className="fa fa-trash"></i></Button>
        </Th>
      </Tr>
    })
  }
  // componentWillReceiveProps(newprops){
  //   this.setState({
  //     taskName:newprops.taskEdit.taskName
  //   })
  // }
  render() {
    console.log('re-render');
    return (
      <ThemeProvider theme={this.state.theme} >
        <Container >
          <Dropdown onChange={(e) => {
            if (e.target.value === 'ToDoDarkTheme') {
              this.setState({ theme: ToDoDarkTheme })
            }
            if (e.target.value === 'ToDoLightTheme') {
              this.setState({ theme: ToDoLightTheme })
            }
          }} >
            <option value='ToDoDarkTheme' >Dark Theme</option>
            <option value='ToDoLightTheme' >Light Theme</option>
          </Dropdown>
          <Heading3 className='text-center mt-2 '>To Do List</Heading3>
          <TextField label={'Task name'} onChange={(e) => { this.handleInput(e) }} value={this.state.taskName}></TextField>
          <Button disabled={this.state.disable} className='ml-2' onClick={this.handleSubmit}><i className="fa fa-plus" ></i> Add Task</Button>
          <Button disabled={!this.state.disable} className='ml-2' onClick={this.updateTask}><i className="fa fa-upload" ></i> Update Task</Button>
          <hr className='bg-white' />
          <Heading3>Task To Do</Heading3>
          <Table>
            <Thead>
              {this.renderTaskToDo()}
            </Thead>
          </Table>
          <Heading3>Task Completed</Heading3>
          <Table>
            <Thead>
              {this.renderTaskCompleted()}
            </Thead>
          </Table>
        </Container>
      </ThemeProvider>
    )
  }
  componentDidUpdate(prevProps) {
    console.log('did-update-1:' + prevProps.taskEdit.id );

    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      console.log('did-update-2');
      this.setState({
        taskName: this.props.taskEdit.taskName
      })
    }
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    taskList: rootReducer.toDoReducer.taskList,
    taskDone: rootReducer.toDoReducer.taskDone,
    taskEdit: rootReducer.toDoReducer.taskEdit,
  }
}

export default connect(mapStateToProps)(ToDoList)