/*
1. Buat aplikasi untuk memasukkan data pengguna dengan persyaratan berikut:
A. Buat dua halaman, yang pertama adalah untuk menampilkan data pengguna dengan tabel dan yang kedua adalah formulir 
Untuk mendaftarkan pengguna
B. Buat navbar untuk navigasi antara halaman pengguna dan halaman register
C. Untuk manajemen data, GUNAKAN json-server dan simpan data dalam file .json
D. Pada halaman daftar, Anda harus menyediakan agar pengguna dapat memasukkan nama, email, dan kata sandi
E. Anda harus melakukan validasi untuk semua input dengan kriteria ini:
   Untuk nama, tidak boleh kosong dan karakter min 6
   Untuk email, tidak boleh kosong harus format email yang valid
   Untuk password, tidak boleh kosong, karakter min ý, minimal mengandung satu huruf kecil, satu 
   huruf besar, satu angka, dan satu simbol
F. Untuk validasi, gunakan paket formik dan yup (jangan manual)
G. Jika input tidak sesuai dengan kriteria kami, tampilkan pesan kesalahan sehingga pengguna tahu kesalahan mereka
H. Ketika kami mengklik tombol kirim dan datanya benar, posting ke file kami .json dan 
   Segera navigasikan ke halaman pengguna dan daftar harus diperbarui
I. Menyimpan data dalam keadaan global (redux)
J. Tampilkan jumlah data di navbar

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


import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Register } from "./pages/register";
import { UserList } from "./pages/users";
import axios from 'axios'
import { setData } from "./redux/userSlice";

function App() {
  const dispatch = useDispatch()
  const [reload, setReload] = useState(false)

  const getData = async () => {
    try {
      const { data } = await axios.get("http://localhost:2000/users")
      dispatch(setData(data))
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData()
  }, [reload])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Register reload={reload} setReload={setReload} />} />
        <Route path="/users" element={<UserList reload={reload} setReload={setReload} />} />
      </Routes>
    </div>
  );
}

export default App;

