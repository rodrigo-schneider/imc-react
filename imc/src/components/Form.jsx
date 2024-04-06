import { useState } from 'react'

function Form() {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState('');
  
    const handleChangePeso = (e) => {
      setPeso(e.target.value);
    }
  
    const handleChangeAltura = (e) => {
      setAltura(e.target.value);
    }
  
    const calculoImc = (peso, altura) => {
        const pesoFloat = parseFloat(peso); 
        const alturaFloat = parseFloat(altura) / 100;
        return (pesoFloat / (alturaFloat * alturaFloat)).toFixed(2);
    }

    const handleCalcularImc = () => {
        const novoImc = calculoImc(peso, altura);
        setImc(novoImc);
      }
    
    return (
      <>
      <div className='container'>
      <label>Peso</label>
        <input type="number" placeholder='Ex.: 80kg' value={peso} onChange={handleChangePeso}/>
        <label>Altura</label>
        <input type="number" placeholder='Ex.: 175cm' value={altura} onChange={handleChangeAltura}/>
        <button onClick={handleCalcularImc}>Calcular</button>
        {imc && <p>Seu IMC é: {imc}</p>}
      </div>       
      </>
    )
  }

  export default Form;