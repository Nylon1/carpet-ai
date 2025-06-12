import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Carlo - Carpet & Flooring Advisor</h1>
      <p className="mb-2">With over 20 years of experience, Carlo provides A-Z knowledge on all matters related to carpets and flooring.</p>
      <p className="mb-2">Installation services available anywhere in the UK.</p>
      <p className="mb-2">For enquiries, email <a href="mailto:enquiries@bookmycarpet.co.uk" className="text-blue-600 underline">enquiries@bookmycarpet.co.uk</a>.</p>
    </main>
  );
}
