import React, { Component } from 'react';

class ApiExample extends Component {
  constructor() {
    super();
    this.state = {
      response: undefined,
    }
  }

  componentDidMount() {
    let url = 'https://api.bamboohr.com/api/gateway.php/switchmediaau/v1/employees/directory';

    fetch(url, {
      method: 'get',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "authorization": "Basic [insert here]",
      },
    })
    .then(json => json)
    .then(function (data) {
      console.log('Request succeeded with JSON response', data);
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