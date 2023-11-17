import React  from 'react'
import { useState } from 'react';
import '../App.css'

const NumerosRomanos = [
  { valor: 1000, romanos: 'M' },
  { valor: 900, romanos: 'CM' },
  { valor: 500, romanos: 'D' },
  { valor: 400, romanos: 'CD' },
  { valor: 100, romanos: 'C' },
  { valor: 90, romanos: 'XC' },
  { valor: 50, romanos: 'L' },
  { valor: 40, romanos: 'XL' },
  { valor: 10, romanos: 'X' },
  { valor: 9, romanos: 'IX' },
  { valor: 5, romanos: 'V' },
  { valor: 4, romanos: 'IV' },
  { valor: 1, romanos: 'I' }
];

function toRoman(num) {
  if (isNaN(num)) { // checa se o  "num" é realmente um numero, caso nao seja retorna ' '.
      return '';
  }
  let numerosromanos = '';
  for (let i = 0; i < NumerosRomanos.length; i++) { //  loop for percorre o array de 0 até o comprimento do array.
      while (num >= NumerosRomanos[i].valor) { // while é executado enquanto o valor de num for maior ou igual ao valor atual no array.
        numerosromanos = numerosromanos + NumerosRomanos[i].romanos; // cada iteração do loop while, o numeral romano correspondente é adicionado à string numerosromanos.
          num = num - NumerosRomanos[i].valor; // valor numérico correspondente ao numeral romano é subtraído de num para garantir que o próximo loop while use o próximo numeral romano apropriado.
      }
  }
  return numerosromanos; // return numero romano e adicionado na variavel.
}

function toDecimal(romano) {
    if (typeof romano !== 'string' ) { // checa se o  "num" é realmente um numero Romano, caso nao seja retorna ' '.
        return '';
    }
    romano = romano.toUpperCase(); // Convert to uppercase for consistency
    let decimal = 0;

    for (let i = 0; i < NumerosRomanos.length; i++) {
        while (romano.includes(NumerosRomanos[i].romanos)) { // Enquanto tiver numero romano na string continua seguindo
          decimal = decimal + NumerosRomanos[i].valor; // Adiciona o valor decimal correspondente.
          romano = romano.replace(NumerosRomanos[i].romanos, ''); // Remove o numeral romano da string.
        }
      }

    return decimal; // return numero romano e adicionado na variavel.
  }

const RomanToDecimal = () => {
  const [inputRoman, setInputRoman] = useState('');
  const [outputRoman, setOutputRoman] = useState('');
  const [inputDecimal, setInputDecimal] = useState('');
  const [outputDecimal, setOutputDecimal] = useState('');
  
  
  const handleInputChange = (e) => {
    const num = e.target.value; //  Obtém o valor do input quando ocorre mudanca.
    if (num < 4000 && num.length >= 1) { // Verifica se o valor do input é menor que 4000 e tem pelo menos um caractere.
        setInputRoman(num); // Se a condição é atendida, define o estado input com o valor do input.
        setOutputRoman(toRoman(num)); // Chama a função toRoman para converter o número em numeral romano e define o estado output com o resultado.
    } else {
      setOutputRoman('Digite um numero para converter'); // Define o estado output com uma mensagem indicando que é necessário digitar um número para converter.
        setInputRoman(''); // Define o estado input como uma string vazia.
    }
  };

  const handleInputChange2 = (e) => {
    const romanNumeral = e.target.value; // Obtém o valor do input quando ocorre mudança.
    if (romanNumeral.length > 0 && romanNumeral.trim().length <= 4) { // checa se o input é uma string e tem no max 4 digitos.
        setInputDecimal(romanNumeral); // Se a condição é atendida, define o estado input com o valor do input.
      setOutputDecimal(toDecimal(romanNumeral)); // Chama a função toDecimal para converter o numeral romano em número decimal e define o estado output com o resultado.

    } else {
      setInputDecimal(''); // Define o estado input como uma string vazia.
      setOutputDecimal('Digite um numero romano para converter'); // Define o estado output com uma mensagem indicando que é necessário digitar um número para converter.
    }
  };

  return (
    <div className="app-container">
        <div className='div-informacoes'>
        <p>Bem-vindo ao nosso Conversor de Numerais Romanos! Esta ferramenta permite que você converta facilmente entre numerais romanos e números decimais. Seja para expressar um número no estilo romano antigo ou decodificar um numeral romano em seu equivalente numérico moderno, esta ferramenta atende às suas necessidades.</p>
        <p>Como Usar:</p>
        <p>Insira um número (até 3999) para convertê-lo em numerais romanos. </p>
        <p>Insira um numeral romano (até 4 caracteres) para convertê-lo em um número decimal.</p>
        </div>
      <div className='div-inside'>
      <h1>Converte para Numeros Romanos</h1>
      <div className="roman">{outputRoman}</div>
      <div className="input-container">
        <input type="search" value={inputRoman} onChange={handleInputChange} />
      </div>
      <h1>Converte para Numeros Decimais</h1>
      <div className="roman">{outputDecimal}</div>
      <div className="input-container">
        <input type="search" value={inputDecimal} onChange={handleInputChange2} />
      </div>
      </div>
 </div>
  );
};
export default RomanToDecimal;