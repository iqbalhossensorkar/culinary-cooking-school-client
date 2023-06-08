import { Controller, useForm } from "react-hook-form";

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input {...register("name", { required: true })} className="input input-warning" />

            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("email", { required: true })} className="input input-warning" />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="password" {...register("password", { required: true })} className="input input-warning" />
            <input type="password" {...register("confirm password", { required: true })} className="input input-warning" />
            <input type="file" {...register("photoURL", { required: true })} className="" />
            <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>
            <input type="tel" {...register("phone")} className="" />
            <input type="text" {...register("addess")} className="" />
            <input type="submit" />
        </form>
    );
};

export default Signup;