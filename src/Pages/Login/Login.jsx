import "./Login.css";

const Login = () => {
  const Direct = (e) => {
    window.location.href = "/Home";
  };

  return (
    <div className="app">
      <div className="container">
        <div className="login">
          <h1>
            <img
              src="https://yildiz.edu.tr/themes/custom/ytu/logo.svg"
              alt="YTÜ Spor Kompleksleri Randevu Sistemi"
            />
          </h1>
          <h2>YTÜ Spor Kompleksleri Randevu Sistemi</h2>
          <h4>Öğrenci Numaranız ve Şifreniz ile Giriş Yapabilirsiniz</h4>
          <div>
            <input type="text" placeholder="ÖĞRENCİ NO" />
            <input type="password" placeholder="SIFRE" required />
          </div>
          <div className="button">
            <button type="submit" onClick={Direct}>
              Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
