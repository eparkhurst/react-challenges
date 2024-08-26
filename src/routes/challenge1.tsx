import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/challenge1')({
  component: () => <Challenge1 />,
});

const Challenge1 = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSuccess(true);
  };
  return (
    <div className="flex w-full justify-center p-8">
      <form
        onSubmit={handleSubmit}
        className="flex h-fit w-[400px] flex-col items-center gap-2 rounded bg-white px-4 py-8 shadow"
      >
        <h2 className="mb-6 text-center text-2xl">My Form</h2>
        <label htmlFor="email">
          <span className="mr-2">Email</span>
          <input
            className="border"
            id="email"
            name="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={({ target }) => {
              setEmailError('');
              setSuccess(false);
              setEmail(target.value);
            }}
          />
        </label>
        <div className="h-5">{emailError && <span className="text-red-500">{emailError}</span>}</div>
        <div className="flex flex-col items-center">
          <button type="submit" className="w-fit rounded bg-blue-500 p-3 text-white">
            Submit
          </button>
          {loading && <p>Loading...</p>}
          {success && <p>Success!</p>}
        </div>
      </form>
    </div>
  );
};
