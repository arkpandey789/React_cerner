import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { FormControl, InputLabel, makeStyles, Select, MenuItem } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'

const AddRadioButton = () => {
  let history = useHistory();

  const [elements, setElements] = useState({
    ipType: "RadioButton",
    label: "",
    mnemonic: "",
    placeholder: "",
    validations: "",
    required: "",
    options: [
      {
        display: "",
        value: "",
      }
    ],
    gridconfig: [
      {
        tiny: "",
        small: "",
        medium: "",
        large: ""
      }
    ],

  });


  const onFormSubmit = (values, submitProps) => {
    submitProps.setSubmitting(false)
    submitProps.resetForm()
  }

  const initialOptions = {
    options: [
      {
        display: "",
        value: "",
      }
    ]
  };

  const initialValues = {
    gridconfig: [
      {
        tiny: "",
        small: "",
        medium: "",
        large: ""
      }
    ]
  };



  const onInputChange = e => {
    setElements({ ...elements, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/elements", elements);
    history.push("/");
  };


  const { ipType, label, mnemonic, placeholder, validations, options, required,gridconfig } = elements;

  return (

    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add RadioButton</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Label"
              name="label"
              value={label}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Mnemonic"
              name="mnemonic"
              value={mnemonic}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Placeholder"
              name="placeholder"
              value={placeholder}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Validations"
              name="validations"
              value={validations}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br />
          <div className="form-group" variant="outlined" >
            <InputLabel >Required</InputLabel>
            <Select style={{ "width": "100%" }} name="required" value={required} placeholder="Required" onChange={e => onInputChange(e)}>
              <option value="">Select</option>
              <option value="True">True</option>
              <option value="False">False</option>
            </Select>
          </div>


          <div>
            <h4>GridConfig</h4>
            <Formik
              initialValues={initialValues}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                elements.gridconfig = [...values.gridconfig]
                console.log(elements)
                // alert(JSON.stringify(values, null, 2));


              }}
            >
              {({ values }) => (
                <Form>
                  <FieldArray name="gridconfig">
                    {({ insert, remove, push }) => (
                      <div>
                        {values.gridconfig.length > 0 &&
                          values.gridconfig.map((option, index) => (
                            <div className="row" key={index}>
                              <div className="col">

                                <Field
                                  name={`gridconfig.${index}.tiny`}
                                  placeholder="Tiny"
                                  type="number"
                                />
                              </div>
                              <div className="col">

                                <Field
                                  name={`gridconfig.${index}.small`}
                                  placeholder="Small"
                                  type="number"
                                />
                              </div>
                              <div className="col">

                                <Field
                                  name={`gridconfig.${index}.medium`}
                                  placeholder="Medium"
                                  type="number"
                                />
                              </div>
                              <div className="col">

                                <Field
                                  name={`gridconfig.${index}.large`}
                                  placeholder="Large"
                                  type="number"
                                />
                              </div>
                              
                            </div>
                          ))}
                        
                      </div>
                    )}
                  </FieldArray>
                  <button type="submit">Confirm Config</button>
                </Form>
              )}
            </Formik>
          </div>


          <div>
            <h4>Options</h4>
            <Formik
              initialValues={initialOptions}
              onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                elements.options = [...values.options]
                console.log(elements)
                // alert(JSON.stringify(values, null, 2));


              }}
            >
              {({ values }) => (
                <Form>
                  <FieldArray name="options">
                    {({ insert, remove, push }) => (
                      <div>
                        {values.options.length > 0 &&
                          values.options.map((option, index) => (
                            <div className="row" key={index}>
                              <div className="col">

                                <Field
                                  name={`options.${index}.display`}
                                  placeholder="Display"
                                  type="text"
                                />
                              </div>
                              <div className="col">

                                <Field
                                  name={`options.${index}.value`}
                                  placeholder="Value"
                                  type="text"
                                />
                              </div>
                              
                              <div className="col">
                                <button
                                  type="button"
                                  className="secondary"
                                  onClick={() => remove(index)}
                                >
                                  X
                        </button>
                              </div>
                            </div>
                          ))}
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => push({ display: "", value: "" })}
                        >
                          Add option
                </button>
                      </div>
                    )}
                  </FieldArray>
                  <button type="submit">Confirm Options</button>
                </Form>
              )}
            </Formik>
          </div>

          <button className="btn btn-primary btn-block">Add Data</button>
        </form>
      </div>
    </div>

  );
};

export default AddRadioButton;










































// import React, { useState } from "react";
// import axios from 'axios'
// import { useHistory } from "react-router-dom";
// import { FormControl, InputLabel, makeStyles, Select, MenuItem } from '@material-ui/core';
// import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'

// const AddRadioButton = () => {
//   let history = useHistory();

//   const [elements, setElements] = useState({
//     ipType: "RadioButton",
//     label: "",
//     mnemonic: "",
//     placeholder: "",
//     validations: "",
//     options: "",
//     required: "",
//     tests: [
//       {
//         display: "",
//         value: ""
//       }
//     ]

//   });


//   const onFormSubmit = (values, submitProps) => {
//     submitProps.setSubmitting(false)
//     submitProps.resetForm()
//   }



//   const onInputChange = e => {
//     setElements({ ...elements, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.post("http://localhost:3003/elements", elements);
//     history.push("/");
//   };

//   const initialValues = {
//     tests: [
//       {
//         display: "",
//         value: ""
//       }
//     ]
//   };

//   const { ipType, label, mnemonic, placeholder, validations, options, required, tests } = elements;

//   return (

//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Add RadioButton</h2>
//         <form onSubmit={e => onSubmit(e)}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Label"
//               name="label"
//               value={label}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Mnemonic"
//               name="mnemonic"
//               value={mnemonic}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Placeholder"
//               name="placeholder"
//               value={placeholder}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Validations"
//               name="validations"
//               value={validations}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Options"
//               name="options"
//               value={options}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <br />
//           <div className="form-group" variant="outlined" >
//             <InputLabel >Required</InputLabel>
//             <Select style={{ "width": "100%" }} name="required" value={required} placeholder="Required" onChange={e => onInputChange(e)}>
//               <option value="">Select</option>
//               <option value="True">True</option>
//               <option value="False">False</option>
//             </Select>
//           </div>


//           <div>
//     <h4>Tests</h4>
//     <Formik
//       initialValues={initialValues}
//       onSubmit={async (values) => {
//         await new Promise((r) => setTimeout(r, 500));
//         elements.tests=[...values.tests]
//         console.log(elements)
//         // alert(JSON.stringify(values, null, 2));


//       }}
//     >
//       {({ values }) => (
//         <Form>
//           <FieldArray name="tests">
//             {({ insert, remove, push }) => (
//               <div>
//                 {values.tests.length > 0 &&
//                   values.tests.map((test, index) => (
//                     <div className="row" key={index}>
//                       <div className="col">

//                         <Field
//                           name={`tests.${index}.display`}
//                           placeholder="Display"
//                           type="text"
//                         />
//                       </div>
//                       <div className="col">

//                         <Field
//                           name={`tests.${index}.value`}
//                           placeholder="Value"
//                           type="text"
//                         />
//                       </div>
//                       <div className="col">
//                         <button
//                           type="button"
//                           className="secondary"
//                           onClick={() => remove(index)}
//                         >
//                           X
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 <button
//                   type="button"
//                   className="secondary"
//                   onClick={() => push({ display: "", value: "" })}
//                 >
//                   Add test
//                 </button>
//               </div>
//             )}
//           </FieldArray>
//           <button type="submit">Confirm Options</button>
//         </Form>
//       )}
//     </Formik>
//   </div>



//           <button className="btn btn-primary btn-block">Add Data</button>
//         </form>
//       </div>
//     </div>

//   );
// };

// export default AddRadioButton;
