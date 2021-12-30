import './App.css';
import Header from './components/Header';
import { useForm } from "react-hook-form";
import { FormGroup } from '@mui/material';
import FileInput from './components/FileSaver'
import axios from 'axios';
function App() {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    axios.post('http://localhost:8080/api', JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((event) => window.alert('ok'))
  };

  return (
    <div className="App">


      <div className='container form'>
        <h3>Dados pessoais</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
            
         <div>
            <label className='cabeca'><b>Nome Completo</b></label>
            <div className='row'>
              <input
              class="input-form large-input" 
              {...register("nome")} 
              />
            </div>
            <br/>      
            </div>
            <div className='row' id='tes'>
              <b className='col-md-7'>
                CPF
              </b>
              
              <b className='col-md-4 title'>
                 Data de nascimento
              </b>
            </div>
            <div class="row">
              <input 
                class="col-md-7 input-form" 
                {...register("cpf")} 
              />
              <input 
                class="col-md-4 input-form" 
                type="date" 
                {...register("dataNascimento")} 
              />

          
            </div>
            <div className='row' id='tes1'>
              <b className='col-md-7'>
                Telefone celular
              </b>
              
              <b className='col-md-4 title'>
                Telefone fixo
              </b>
            </div>
            <div class="row">

              <input 
                class="col-md-7 input-form" 
                type='tel'
                {...register("celular")} 
              />
              <input 
                class="col-md-4 input-form" 
                type="tel" 
                {...register("telFixo" )} 
              />
          
            </div>
            <div className='row'>
              <label><b>E-mail</b></label>
            </div>
            <div className='row'>
              <input
                class="input-form large-input" 
          
                {...register("email")} 
              />
            </div>
            <br/>         
            <br/>

            <div className="form-group form-check">
              <div className='check'>
                <input  name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" />
              </div>
              
              <label htmlFor="acceptTerms" className="form-check-label">Quero receber alertas, promoções e novidades por email</label>
            </div>

            <FileInput
              accept="image/png, image/jpg, image/jpeg, image/pdf"
              multiple
              name="O logotipo será impresso quando optar por ADICIONAR LOGO"
              mode="append"
            />
              
          </FormGroup>
          
          <div className='row'>
              <b className='col-md-4'>
                CEP
              </b>
              
              <b className='col-md-7 title-2'>
                Rua
              </b>
            </div>
            <div class="row">

              <input 
                class="col-md-4 input-form" 
                type='tel'
                {...register("cep")} 
              />
              <input 
                class="col-md-7 input-form" 
                type="tel" 
                {...register("rua" )} 
              />

          
            </div>
            <br />

            <div className='row'>
              <b className='col-md-4'>
                Número
              </b>
              
              <b className='col-md-7 title-2'>
                Bairro
              </b>
            </div>

            <div class="row">
              <input 
                class="col-md-4 input-form" 
                type='tel'
                {...register("numero")} 
              />
              <input 
                class="col-md-7 input-form" 
                type="tel" 
                {...register("bairro")} 
              />

            </div>
            <br/>
            <div className='row'>
              <b className='col-md-7'>
                Cidade
              </b>
              <b className='col-md-4 title'>
                Estado
              </b>
            </div>
            <div class="row">

              <input 
                class="col-md-7 input-form" 

                {...register("cidade")} 
              />
              <input 
                class="col-md-4 input-form" 

                {...register("estado" )} 
              />

          
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='center'>
            <button
            className='submit-button'
            type="submit" 
            >
            Editar dados
            </button>
            </div>
            
        </form>
      </div>
      <Header />
    </div>
  );
}

export default App;
