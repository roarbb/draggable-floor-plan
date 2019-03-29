import React, { Component } from 'react';
import { List, Avatar, Badge } from 'antd';
import { inject, observer } from "mobx-react";

class EmployeeList extends Component {
  render() {

    const employees = (this.props.searchValue === undefined) ? this.props.employees : this.props.filteredEmployees;

    return (
      <List
        itemLayout="horizontal"
        dataSource={employees}
        renderItem={employee => {
          const aka = (employee.preferredName === undefined) ? "" : `aka ${employee.preferredName}`;

          return <div>
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={employee.photoUrl} />}
                title={`${employee.firstName} ${employee.lastName} ${aka}`}
                description={
                  `${employee.workEmail || ""}`
                }
              />
              {this.props.deskEmployeeIdKeyMap[employee.id] ? null :
                (<Badge text={"No Desk"} status={"warning"} />)}
            </List.Item>
            <span />
          </div>
        }}
      />
    );
  }
}

export default inject(rootStore => {
  return {
    employees: rootStore.employeeStore.employeeList,
    deskEmployeeIdKeyMap: rootStore.desksStore.deskEmployeeIdKeyMap,
  }
})(observer(EmployeeList));
