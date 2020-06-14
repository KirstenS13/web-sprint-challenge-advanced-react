// write your custom hook here to control your checkout form
import { useState } from 'react';

export const useForm = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    });

    const handleChanges = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    const handleSubmit = e => {
        e.preventDefault();
        setShowSuccessMessage(true);
    };

    return [values, handleChanges, handleSubmit];
};