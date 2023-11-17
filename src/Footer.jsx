import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Curriculo from '../img/CV.pdf'



const Footer = () => {
  return (
    <div className='div-footer'>
        <div className='div-footer-sociais'>
        <a href="https://www.linkedin.com/in/gabrielabreuu/"><FaLinkedin size={30}/></a>
        <a href="https://github.com/gacherubini"><FaGithub size={30}/></a>
        <a href="https://gabrielabreu-portifolio.netlify.app/" className='btn'>Meu Portifólio</a>
        <a href={Curriculo} className='btn' download="Curriculo">Curriculo Download</a>
        </div>
    </div>  
  )
}

export default Footer