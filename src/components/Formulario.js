import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre_empleado: '',
        a_paterno_empleado: '',
        a_materno_empleado: '',
        telefono: '',
        id_direccion_empleado: '',
        email_empleado: '',
        activo_empleado: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Empleado creado:', formData);
    };
        return <div>
            
    <h1>Crear Nuevo Empleado</h1>
        <div className='nombreEmpleado'>
        <label for="nombre_empleado" className='etiqueta'>Nombre(s):</label>
        <input type="text" id="box-text" name="nombre_empleado" value={formData.nombre_empleado} onChange={handleChange} />
        </div>

        <div className='a_paterno'>
            <label for="a_paterno_empleado" className='etiqueta'>Apellido Paterno:</label>
            <input type="text" id="box-text" name="a_paterno" value={formData.nombre_empleado} onChange={handleChange} />
        </div>
        
        <div className='a_materno'> 
            <label for="a_materno_empleado" className='etiqueta'>Apellido Materno:</label>
            <input type='text' id='box-text' name='a_materno'></input>
        </div>
        
        <div className='telefono'> 
            <label for="telefono" className='etiqueta'>Teléfono:</label>
            <input type='text' id='box-text' name='email'></input>
        </div>

        <div> 
            <label for="id_direccion_empleado" className='etiqueta5'>ID Dirección:</label>
        </div>
        
        <div>
            <label for="email_empleado" className='etiqueta6'>Email:</label>
        </div>
        
        <label for="activo_empleado" className='etiqueta7'>Activo:</label>

        <button type="submit">Crear Empleado</button>

        </div>
};

export default Formulario;