import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Accounting for employees in the company "Discovery World"</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>The prize will be received by: {increased} </h2>
        </div>
    )
}
export default AppInfo;