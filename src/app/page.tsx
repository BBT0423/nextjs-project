"use client"

import { useState } from 'react';

export default function Home() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function signIn() {
    if ((username !== null && username !== '') && (password !== null && password !== '')) {
      window.location.href = '/about';
    }
  }

  return (
    <main>
      <form className='flex flex-col p-4'>
        <div>
          <h3 className='mx-3'>ID</h3>
          <input
            className='bg-slate-500 rounded-md'
            type='text'
            id='username'
            value={username} // เพิ่ม value เพื่อให้แสดงค่า username จาก state
            onChange={(e) => setUsername(e.target.value)} // ใช้ onChange เพื่อเรียกใช้ setUsername เมื่อมีการเปลี่ยนแปลงใน input
          />
        </div>
        <div>
          <h3 className='mx-3'>Password</h3>
          <input
            className='bg-slate-500 rounded-md'
            type='password' // เปลี่ยน type เป็น password เพื่อซ่อนข้อมูล
            id='password'
            value={password} // เพิ่ม value เพื่อให้แสดงค่า password จาก state
            onChange={(e) => setPassword(e.target.value)} // ใช้ onChange เพื่อเรียกใช้ setPassword เมื่อมีการเปลี่ยนแปลงใน input
          />
        </div>
      </form>
      <button className='bg-green-500 px-4 py-2 rounded-xl' onClick={signIn}>
        Login
      </button>
      HelloWorld 001002
    </main>
  );
}
