/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const AddClassForm = ({ user }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-mono text-gray-600"> CLass Name:</span>
                    </label>
                    <input className="input input-warning" name="title" type="text" {...register("title", { required: 'You missed the class name' })} />
                    {errors.title && <p className="text-error">{errors.title.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-mono text-gray-600"><span className="text-error">*</span>Class Image:</span>
                    </label>
                    <input className="file-input file-input-warning" name="image" type="file" {...register("image", { required: 'Image is required', })} accept="image/*" />
                    {errors.image && <p className="text-error">{errors.image.message}</p>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-mono text-gray-600">Instructor Name:</span>
                    </label>
                    <input className="input input-warning" name="name" type="text" defaultValue={user && user.displayName} readOnly {...register("name")} />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-mono text-gray-600">Instructor Email:</span>
                    </label>
                    <input className="input input-warning" name="email" type="email" defaultValue={user && user.email} readOnly {...register("email")} />
                </div>
                <div className="lg:flex items-center gap-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-mono text-gray-600"><span className="text-error">*</span>Available Seats:</span>
                        </label>
                        <input className="input input-warning" name="seats" type="number" {...register("seats", { required: 'You have to add this field' })} />
                        {errors.seats && <p className="text-error">{errors.seats.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label text-lg font-mono text-gray-600">
                            <span className="label-text text-lg font-mono text-gray-600"><span className="text-error">*</span>Price:</span>
                        </label>
                        <input className="input input-warning" name="price" type="number" {...register("price", { required: "You didn't added price" })} />
                        {errors.price && <p className="text-error">{errors.price.message}</p>}
                    </div>
                </div>

                <input className="bg-black btn mt-5 mb-5 text-white hover:text-black hover:border-2 transition w-full rounded-lg hover:bg-transparent border-red-400 font-bold" type="submit" value="add now" />
            </form>
        </>
    );
};

export default AddClassForm;