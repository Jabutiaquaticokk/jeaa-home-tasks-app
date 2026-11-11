import './campoCustomizado.css';

function CampoCustomizado(props) {
    return <div className='campo-customizado-div'>
        <span className='campo-customizado-span'>{props.label}</span>
        <input {...props} className="campo-customizado" /> 
    </div>;
}

export default CampoCustomizado;