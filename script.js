class List extends React.Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  state = {
    list: [],
    word: ""
  };

  changeHandler(event) {
    this.setState({ word: event.target.value });
    console.log("change", event.target.value);
  }

  clickHandler() {
    let stuff = this.state.list;
    stuff.unshift(this.state.word);
    this.setState({ list: stuff, word: "" });
  }

  render() {
    // render the list with a map() here
    let listOfItems = this.state.list.map(item => {
      return <li>{item}</li>;
    });

    console.log("rendering");
    return (
      <div>
        <div className="list">
          <input onChange={this.changeHandler} value={this.state.word} />
          <button onClick={this.clickHandler}>Add Item</button>
        </div>
        <ul>{listOfItems}</ul>
      </div>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
