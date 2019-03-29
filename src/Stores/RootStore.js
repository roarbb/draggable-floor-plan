import { runInAction} from "mobx";
import EmployeeStore from "./EmployeeStore";
import DesksStore from "./DesksStore";

export default class RootStore {
    constructor(initState={}) {

        const defaultState = {
            employeesState: {
                employeeList: []
            },
            desksState: {
                deskList: []
            }
        };

        initState = Object.assign({}, defaultState, initState);
        this.employeeStore = new EmployeeStore(initState.employeesState);
        this.desksStore = new DesksStore(initState.desksState);
    }

    init = () => {
        Promise.all([this.employeeStore.fetchEmployees(),this.desksStore.fetchDesks()])
            .then((res) => {
                runInAction(() => {
                    this.employeeStore.setEmployeeList(res[0]);
                    this.desksStore.setDeskList(res[1]);
                });
            });
    }
}
