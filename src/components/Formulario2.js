import React, { useState } from 'react';
import './Formulario2.css';

const Formulario2 = () => {
    const [formData, setFormData] = useState({
        nombre_empleado: '',
        a_paterno_empleado: '',
        a_materno_empleado: '',
        telefono: '',
        id_direccion_empleado: '',
        email_empleado: '',
        activo_empleado: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.nombre_empleado) newErrors.nombre_empleado = 'El nombre es requerido';
        if (!formData.a_paterno_empleado) newErrors.a_paterno_empleado = 'El apellido paterno es requerido';
        if (!formData.a_materno_empleado) newErrors.a_materno_empleado = 'El apellido materno es requerido';
        if (!formData.telefono) newErrors.telefono = 'El teléfono es requerido';
        if (!formData.id_direccion_empleado) newErrors.id_direccion_empleado = 'El ID de dirección es requerido';
        if (!formData.email_empleado) newErrors.email_empleado = 'El email es requerido';
        else if (!/\S+@\S+\.\S+/.test(formData.email_empleado)) newErrors.email_empleado = 'El email no es válido';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            console.log('Empleado creado:', formData);
            // Aquí iría la lógica para enviar los datos a un servidor
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="formulario-container">
            <h1>Crear Nuevo Empleado</h1>
            <form onSubmit={handleSubmit} className="formulario">
                <div className="form-group">
                    <label htmlFor="nombre_empleado">Nombre:</label>
                    <input 
                        type="text" 
                        id="nombre_empleado" 
                        name="nombre_empleado" 
                        value={formData.nombre_empleado} 
                        onChange={handleChange} 
                    />
                    {errors.nombre_empleado && <span className="error">{errors.nombre_empleado}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="a_paterno_empleado">Apellido Paterno:</label>
                    <input 
                        type="text" 
                        id="a_paterno_empleado" 
                        name="a_paterno_empleado" 
                        value={formData.a_paterno_empleado} 
                        onChange={handleChange} 
                    />
                    {errors.a_paterno_empleado && <span className="error">{errors.a_paterno_empleado}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="a_materno_empleado">Apellido Materno:</label>
                    <input 
                        type="text" 
                        id="a_materno_empleado" 
                        name="a_materno_empleado" 
                        value={formData.a_materno_empleado} 
                        onChange={handleChange} 
                    />
                    {errors.a_materno_empleado && <span className="error">{errors.a_materno_empleado}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Teléfono:</label>
                    <input 
                        type="text" 
                        id="telefono" 
                        name="telefono" 
                        value={formData.telefono} 
                        onChange={handleChange} 
                    />
                    {errors.telefono && <span className="error">{errors.telefono}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="id_direccion_empleado">ID Dirección:</label>
                    <input 
                        type="text" 
                        id="id_direccion_empleado" 
                        name="id_direccion_empleado" 
                        value={formData.id_direccion_empleado} 
                        onChange={handleChange} 
                    />
                    {errors.id_direccion_empleado && <span className="error">{errors.id_direccion_empleado}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="email_empleado">Email:</label>
                    <input 
                        type="email" 
                        id="email_empleado" 
                        name="email_empleado" 
                        value={formData.email_empleado} 
                        onChange={handleChange} 
                    />
                    {errors.email_empleado && <span className="error">{errors.email_empleado}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="activo_empleado">Activo:</label>
                    <input 
                        type="checkbox" 
                        id="activo_empleado" 
                        name="activo_empleado" 
                        checked={formData.activo_empleado} 
                        onChange={handleChange} 
                    />
                </div>
                <button type="submit" className="btn-submit">Crear Empleado</button>
            </form>
        </div>
    );
};

export default Formulario2;
