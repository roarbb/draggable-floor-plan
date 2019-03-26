import React, { Component } from 'react';

class ApiExample extends Component {
  constructor() {
    super();
    this.state = {
      response: undefined,
    }
  }

  componentDidMount() {
    let url = 'http://localhost:5000/v1/employees/directory';

    fetch(url)
    .then(response => response.json())
    .then(function (data) {
      console.log(JSON.parse(JSON.stringify(data)))
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });

  }

  render() {
    return (
      <div>
        Api
      </div>
    )
  }
}

export default ApiExample;