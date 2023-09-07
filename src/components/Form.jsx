import React, { useState } from 'react';
import './Form.css';

const EntryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    favouriteColour: '#888888',
    salary: 0
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    dob: '',
    favouriteColour: '',
    salary: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (formData.name === '') {
      newErrors.name = 'Name is required';
    }
    if (formData.email === '') {
      newErrors.email = 'Email is required';
    }
    if (formData.dob === '') {
      newErrors.dob = 'Date of birth is required';
    }
    if (formData.favouriteColour === '') {
      newErrors.favouriteColour = 'Favourite colour is required';
    }
    if (formData.salary < 0) {
      newErrors.salary = 'Salary cannot be negative';
    }

    setErrors(newErrors);
  };

  return (
    <div className='entryFormWrapper'>
      <form className='entryForm' onSubmit={handleSubmit}>
        <h2>Entry Form</h2>
        <div className='entryFormField'>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            type='text'
            name='name'
            aria-label='Name'
            value={formData.name}
            onChange={handleInputChange}
            required
            className={errors.email && 'error'}
          />
          {errors.name && <p className='error'>{errors.name}</p>}
        </div>
        <div className='entryFormField'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            aria-label='Email'
            value={formData.email}
            onChange={handleInputChange}
            required
            className={errors.email && 'error'}
          />
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>
        <div className='entryFormField'>
          <label htmlFor='dob'>Date of Birth</label>
          <input
            id='dob'
            type='date'
            name='dob'
            aria-label='Date of Birth'
            value={formData.dob}
            onChange={handleInputChange}
            required
            max={new Date().toISOString().slice(0, 10)}
            className={errors.email && 'error'}
          />
          {errors.dob && <p className='error'>{errors.dob}</p>}
        </div>
        <div className='entryFormField'>
          <label htmlFor='favouriteColour'>Favourite Colour</label>
          <input
            id='favouriteColour'
            type='color'
            name='favouriteColour'
            value={formData.favouriteColour}
            onChange={handleInputChange}
            className={errors.email && 'error'}
          />
          {errors.favouriteColour && <p className='error'>{errors.favouriteColour}</p>}
        </div>
        <div className='entryFormField'>
          <label htmlFor='salary'>Salary</label>
          <input
            id='salary'
            type='range'
            name='salary'
            value={formData.salary}
            onChange={handleInputChange}
            min='0'
            max='200000'
            step='500'
            className={errors.email && 'error'}
          />
          <p>&pound;{formData.salary}</p>
          {errors.salary && <p className='error'>{errors.salary}</p>}
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default EntryForm;
