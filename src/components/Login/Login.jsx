import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  // State to manage loading and error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // Replace the URL with your server endpoint
      const response = await axios.post('https://orzu.pythonanywhere.com/api/teachers/', formData);

      // Handle successful response
      setSuccess('Form submitted successfully!');
      console.log(response.data);
    } catch (err) {
      // Handle error response
      setError('An error occurred while submitting the form.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>

    </div>
  );
};

export default Login;
