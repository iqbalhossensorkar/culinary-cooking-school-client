import MyClassesTable from "../../../Components/Myclasses/MyClassesTable";
import useClass from "../../../api/useClass";

const MyClasses = () => {
    const [singleClass] = useClass();
    return (
        <div>
            {
                singleClass.map(item => <MyClassesTable key={item._id} item={item} />)
            }
        </div>
    );
};

export default MyClasses;