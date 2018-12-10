import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo'

class TodosContainer extends Component {


  render(){
    let arrayOfTodos = this.props.todos.map((todo, index) => <Todo key={index} text={todo} /> )

    return (
      <div>
        {arrayOfTodos}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodosContainer)
