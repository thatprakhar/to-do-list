import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      new_item: ""
    };
    this.updateItem = this.updateItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  updateItem(e) {
    this.setState({
      new_item: e.target.value
    });
  }

  addItem(e) {
    e.preventDefault();
    if (this.state.new_item == "") {
      return;
    }
    this.setState({
      list: [...this.state.list, this.state.new_item],
      new_item: ""
    });
    console.log(this.state.new_item + " added\n");
  }

  removeItem(e) {
    e.preventDefault();
    let to_remove = e.target.value;
    let new_list = [];
    let flag = true;
    console.log("Old list : " + this.state.list);
    for (var i = 0; i < this.state.list.length; i++) {
      if (flag && this.state.list[i] == to_remove) {
        flag = false;
        continue;
      } else {
        new_list.push(this.state.list[i]);
      }
    }
    console.log("New list : " + new_list);
    console.log(to_remove + " removed\n");
    this.setState({
      list: new_list
    });
  }

  render() {
    let index = 0;
    const items = this.state.list.map(x => (
      <li key={x.id}>
        {x}
        <button
          className="btn btn-danger remove"
          onClick={this.removeItem}
          value={x}
        >
          Remove
        </button>
      </li>
    ));
    return (
      <div className="App">
        <div className="App-header">
          <h2 id="title">To Do List</h2>
          <div className="add-fields">
            <input
              className="input"
              type="text"
              onChange={this.updateItem}
              value={this.state.new_item}
            ></input>
            <button onClick={this.addItem} className="btn btn-info add-button">
              Add
            </button>
          </div>
        </div>
        <div className="to-Do">
          <ol>{items}</ol>
        </div>
      </div>
    );
  }
}

export default App;
