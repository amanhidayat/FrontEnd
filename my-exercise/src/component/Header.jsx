// Header.js


function Header() {
  return (
    <header>
        <h1>Selamat Datang di 
            "SMQR ESPORTS"</h1>
        <img src={require ("../asset/img/smqr esports.jpg")} />
        <nav>
            <ul>
                <li><a href="#">DIVISI<strong>MOBA</strong></a></li>
                <li><a href="#">DIVISI<strong>FPS</strong></a></li>
                <li><a href="#"><strong> P R E S T A S I</strong></a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
