import * as React from "react";
import { inject } from "mobx-react";

class DashboardLayout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="page page-dashboard">
                {children}
            </div>
        );
    }

    componentDidMount() {
        this.props.rootStore.init()
    }
}

export default inject(rootStore => {
    return {rootStore: rootStore}
})(DashboardLayout);




