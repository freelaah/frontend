import React, { Component } from 'react';
import { Container, Logo } from './styles';

export default class SignUp extends Component {
  render() {
    return (
      <Container>
        <Logo />
        <div className='box-white'>
          <form>
            <h3>Criar Conta</h3>

            <div className='form-group'>
              <label>Nome</label>
              <input
                type='text'
                className='form-control'
                placeholder='Digite seu nome'
              />
            </div>

            <div className='form-group'>
              <label>Sobrenome</label>
              <input
                type='text'
                className='form-control'
                placeholder='Digite seu Sobrenome'
              />
            </div>

            <div className='form-group'>
              <label>Endereço de Email</label>
              <input
                type='email'
                className='form-control'
                placeholder='Digite seu email'
              />
            </div>

            <div className='form-group'>
              <label>Senha</label>
              <input
                type='password'
                className='form-control'
                placeholder='Digite sua senha'
              />
            </div>

            <button type='submit' className='btn  btn-block'>
              Sign Up
            </button>
            <p className='forgot-password text-right'>
              Ja possui cadastro? <a href='/'>Logar aqui</a>
            </p>
          </form>
        </div>
      </Container>
    );
  }
}