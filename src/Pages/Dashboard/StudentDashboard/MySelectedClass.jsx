import MyselectedClassTable from "../../../Components/MySelectedClasses/MyselectedClassTable";
import useCart from "../../../api/useCart";

const MySelectedClass = () => {
    const [cart, refetch] = useCart();
    return (
        <div className="" >
            {/* <Helmet>
        <title>Manage Users- CSCA</title>
    </Helmet> */}
            < p className="text-center mt-20 text-3xl font-bold underline underline-offset-8 decoration-wavy decoration-warning-content" > My Selected Classes</p>
            <div className="overflow-x-auto mx-20 mt-20 mb-20">
                <table className="table">
                    <thead>
                        <tr className="bg-gray-300">
                            <th>No.</th>
                            <th>Image</th>
                            <th>Food Name</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((addedClass, index) => <MyselectedClassTable key={addedClass._id} index={index} addedClass={addedClass} refetch={refetch} />)}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MySelectedClass;