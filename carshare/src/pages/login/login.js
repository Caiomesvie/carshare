import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log(password);
  }

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem Vindo!</span>

            <div className='wrap-input'>
              <input className={email !== '' ? 'has-value input' : 'input'} type='email' onChange={(event) => handleEmailChange(event)} />
              <span className='focus-input' data-placeholder='Email'></span>
            </div>

            <div className='wrap-input'>
              <input className={password !== '' ? 'has-value input' : 'input'}
              type='password' onChange={(event) => handlePasswordChange(event)} />
              <span className='focus-input'data-placeholder='Password'></span>
            </div>

            <div className='container-login-form-button'>
              <button className='login-form-button'>Login</button>
            </div>

            <div className='text-center'>
              <span className='text1'>Não possui conta?</span>

              <a className='txt2' href='#'>Criar!</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

