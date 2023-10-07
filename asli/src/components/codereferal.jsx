import React, { useState } from 'react';

function ReferralSystem() {
  const [username, setUsername] = useState(''); // State untuk menyimpan nama pengguna
  const [referralCode, setReferralCode] = useState('');

  const generateReferralCode = () => {
    if (username.length >= 2) {
      // Ambil dua karakter pertama dari nama pengguna
      const words = username.split(' ')
      const userChars = words
      .map((word) => word.charAt(0).toUpperCase())
        .join('');
      
      // Generate empat karakter acak untuk kode referal sisanya
      const randomChars = Math.random().toString(36).substring(2, 6).toUpperCase();

      // Gabungkan karakter dari nama pengguna dan karakter acak
      
      const generatedCode = `${userChars}${randomChars}`;
      
      // Simpan kode referal yang dihasilkan
      setReferralCode(generatedCode);
    } else {
      alert('Nama pengguna harus memiliki minimal 2 karakter.');
    }
  };

  return (
    <div>
      <h2>Generate Kode Referal</h2>
      <input
        type="text"
        placeholder="Nama Pengguna"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={generateReferralCode}>Generate Kode Referal</button>

      {referralCode && (
        <div>
          <h2>Kode Referal Anda:</h2>
          <p>{referralCode}</p>
        </div>
      )}
    </div>
  );
}

export default ReferralSystem;
