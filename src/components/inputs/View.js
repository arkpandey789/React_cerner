import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Elements = () => {
  const [elements, setElements] = useState({
    ipType:"",
    label: "",
    mnemonic: "",
    placeholder: "",
    validations: "",
    options: [
      {
        display: "",
        value: "",
      }
    ],
    required:""
  });
  const { id } = useParams();
  useEffect(() => {
    loadElements();
  }, []);
  const loadElements = async () => {
    const res = await axios.get(`http://localhost:3003/elements/${id}`);
    setElements(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">Element Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Type: {elements.ipType}</li>
        <li className="list-group-item">Label: {elements.label}</li>
        <li className="list-group-item">Mnemonic: {elements.mnemonic}</li>
        <li className="list-group-item">Placeholder: {elements.placeholder}</li>
        <li className="list-group-item">Validations: {elements.validations}</li>
        <li className="list-group-item">Required: {elements.required}</li>
        <li className="list-group-item">Options: 
        <li className="list-group-item">
          {elements.options.display}
        </li>
        <li className="list-group-item">
          {elements.options.value}
        </li>
        </li>
      </ul>
    </div>
  );
};

export default Elements;
