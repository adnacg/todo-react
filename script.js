class List extends React.Component {
  constructor() {
    super();
    // bind the handlers
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  state = {
    list: [],
    word: ""
  };

  // change the state of word to the input value
  // every state change will trigger render
  changeHandler(event) {
    this.setState({ word: event.target.value });
  }

  // what to do when a click happens
  clickHandler() {
    // length validation of input
    if (this.state.word.length > 0) {
      // put the list of to-do array in a variable
      let todos = this.state.list;
      // add the new word to the front of the to-do array
      todos.unshift(this.state.word);
      // change the state of list to the array now with new added word
      // change the state of word back to empty
      this.setState({ list: todos, word: "" });
    } else {
      alert("You need to write something.");
    }
  }

  deleteHandler(removeIndex) {
    this.setState(state => ({
      list: this.state.list.filter((item, index) => index !== removeIndex)
    }));
  }

  render() {
    // reorganise the array into individual <li> tags
    let arrayOfTodos = this.state.list.map((todo, index) => {
      return (
        <div key={index}>
          <li>{todo}</li>
          <button onClick={() => this.deleteHandler(index)}>Delete</button>
        </div>
      );
    });

    return (
      <div>
        <div className="list">
          {/* an input changes 'value' */}
          {/* this change triggers changeHandler, which changes the state of 'word' */}
          {/* every letter input is a change of 'word' state, so rendering is fired */}
          <input onChange={this.changeHandler} value={this.state.word} />
          {/* click triggers clickHandler, which adds the new 'word' to 'list' and then empty the 'word' */}
          <button onClick={this.clickHandler}>Add todo</button>
        </div>
        {/* the array will increase if new 'word' is added to the 'list' */}
        <ul>{arrayOfTodos}</ul>
      </div>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
