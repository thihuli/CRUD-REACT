import React from 'react'
import {Component} from 'react'

export default class Create extends Component {
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Adicionar novos contratos</h3>
                <form>
                    <div className='form-group'>
                        <label>Adicionar Nome e Sobrenome: </label>
                        <input type='text' className='form-control'/>
                       
                    </div>
                    <div className='form-group'>
                        <label>Adicionar nome do contrato:</label>
                        <input type='text' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label>Adicionar número de CPF:</label>
                        <input type='number' className='form-control' placeholder='000.000.000-00'/>
                    </div>
                    <div className='form-group'>
                        <label>Adicionar número de Telefone:</label>
                        <input type='text' className='form-control' placeholder='(00) 00000-0000' />
                    </div>
                    <div className='form-group'>
                        
                        <input type='submit' value='Registro de negócio' className='btn btn-primary'/>                    
                    </div>
                </form>               
            </div>
        )
    }
}