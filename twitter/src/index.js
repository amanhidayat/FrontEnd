/* 
2. Buat Seperti Twiter
A. Pengguna dapat membuat tweet. Anda harus membuat validasi untuk tweet pengguna dengan ini 
Kriteria:
  sebuah. Panjang Tweet tidak boleh lebih dari 50 karakter
  Menampilkan total karakter saat pengguna mengetik
  Tombol Disabled submit jika total karakter lebih dari 50
1.Pengguna dapat mengedit/menghapus tweet-nya
2.Pengguna hanya dapat mengedit/menghapus tweet-nya (tidak dapat mengedit/menghapus tweet pengguna lain)
3.Setiap pengguna dapat mengikuti satu sama lain.
4,Untuk manajemen data, GUNAKAN json-server dan simpan data dalam file .json
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<ChakraProvider>

<App />
</ChakraProvider>
</BrowserRouter>
  
);

