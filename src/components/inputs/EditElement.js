import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { FormControl, InputLabel, makeStyles,Select,MenuItem } from '@material-ui/core';

const EditElement = () => {
  let history = useHistory();
  const { id } = useParams();
  const [elements, setElements] = useState({
    label: "",
    mnemonic: "",
    placeholder: "",
    validations: "",
    options: "",
    required:""
  });

  const { label, mnemonic, placeholder, validations, options,required } = elements;
  const onInputChange = e => {
    setElements({ ...elements, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadElements();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put("http://localhost:3003/elements/"+id, elements);
    history.push("/");
  };

  const loadElements = async () => {
    const result = await axios.get("http://localhost:3003/elements/"+id);
    setElements(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit the Element</h2>
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
              placeholder="Placehlder"
              name="placehlder"
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
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Options"
              name="options"
              value={options}
              onChange={e => onInputChange(e)}
            />
          </div>
          <br />
          <div className="form-group" variant="outlined" >
        <InputLabel >Required</InputLabel>
        <Select style={{"width" : "100%"}} name="required" value={required} placeholder="Required" onChange={e => onInputChange(e)}>
          <option value="">Select</option>
          <option value="True">True</option>
          <option value="False">False</option>
        </Select>
      </div>
          <button className="btn btn-warning btn-block">Update Element</button>
        </form>
      </div>
    </div>
  );
};

export default EditElement;
