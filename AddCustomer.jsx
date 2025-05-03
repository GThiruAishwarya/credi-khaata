// pages/AddCustomer.jsx
import React from 'react';
import { useForm } from 'react-hook-form';

const AddCustomer = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    alert(`Customer ${data.name} added with initial loan: ₹${data.initialLoan || 0}`);
    reset();
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Add New Customer</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <input {...register('name', { required: true })} placeholder="Customer Name" className="border p-2" />
        <input {...register('initialLoan')} type="number" placeholder="Initial Loan (optional)" className="border p-2" />
        <button type="submit" className="bg-green-600 text-white py-2">Add Customer</button>
      </form>
    </div>
  );
};

export default AddCustomer;
