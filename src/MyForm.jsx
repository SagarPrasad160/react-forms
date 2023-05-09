import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});


function MyForm(){

  const { values,errors,touched,handleChange,handleBlur } = useFormik({
    initialValues: {
      name: "",
      email: "",
      age: "",
      password: ""
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(errors)
  
  return <div>
    <form>
      <label htmlFor="name">Name:</label>
      <input 
      id="name"
      type="text"
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
      />
      {
        errors.name && touched.name && <p className="error">{errors.name}</p>
      }
      <label htmlFor="email">Email:</label>
      <input 
      id="email"
      type="email"
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur}
      />
      {
        errors.email && touched.email && <p className="error">{errors.email}</p>
      }
      <label htmlFor="name">Password:</label>
      <input 
      id="password"
      type="password"
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur}
      />
       {
        errors.password && touched.password && <p className="error">{errors.password}</p>
      }
      <button>Submit</button>
    </form>
    </div>;
}

export default MyForm;