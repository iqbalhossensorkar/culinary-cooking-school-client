import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            DashBoard page here
            <Link className="btn" to='/'>home</Link>
        </div>
    );
};

export default Dashboard;