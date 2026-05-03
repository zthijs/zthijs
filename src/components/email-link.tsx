'use client';

export const EmailLink = () => {
  const email = ['info', 'zthijs.dev'].join('@');
  return <a href={`mailto:${email}`}>Email</a>;
};
