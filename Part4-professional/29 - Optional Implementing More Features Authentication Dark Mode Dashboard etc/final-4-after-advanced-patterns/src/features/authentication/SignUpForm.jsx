import React from 'react';
import { useForm } from 'react-hook-form';
import { useSignup } from './useSignup';

export default function SignUpForm() {
    const {signup, isLoading} = useSignup();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues, reset
  } = useForm();

  const onSubmit = ({fullName, email, password}) => {
    console.log('Signup data:', data);
    // you can call supabase.auth.signUp here
    signup({fullName, email, password}, {
        onSettled: ()=> reset(),
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
      <h2>Sign Up</h2>

      <div style={fieldStyle}>
        <label>FullName</label>
        <input
          type="fullName"
          disabled={isLoading}
          {...register('fullName', { required: 'Full Name is required' })}
        />
        {errors.fullName?.message && <p style={errorStyle}>{errors.email.message}</p>}
      </div>

      <div style={fieldStyle}>
        <label>Email</label>
        <input
          type="email"
          {...register('email', { required: 'Email is required', pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please provide a valid email address"
          } })}
          disabled={isLoading}
        />
        {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
      </div>

      <div style={fieldStyle}>
        <label>Password</label>
        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
              validate: (value) => value === getValues().password || 'Passwords need to match'
            },
          })}
          disabled={isLoading}

        />
        {errors.password && <p style={errorStyle}>{errors.password.message}</p>}
      </div>

      <div style={fieldStyle}>
        <label>Password Confirmed</label>
        <input
          type="password confirmed"
          {...register('passwordConfirmed', {
            required: 'Password confirmed is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
          disabled={isLoading}

        />
        {errors.passwordConfirmed && <p style={errorStyle}>{errors.password.message}</p>}
      </div>

      <button type="submit" style={buttonStyle}>Sign Up</button>
      <button type="reset" style={buttonStyle}>Cancel</button>
    </form>
  );
}

// --- Optional inline styles ---
const formStyle = {
  maxWidth: '400px',
  margin: 'auto',
  padding: '1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  fontFamily: 'Arial',
};

const fieldStyle = {
  marginBottom: '1rem',
};

const errorStyle = {
  color: 'red',
  fontSize: '0.8rem',
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
};
