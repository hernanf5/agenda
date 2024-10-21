import { DataTypes } from "sequelize";

const Profesional = sequelize.define('Profesional',{
    id_profesional: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    

})



// Profesional

// ID_Profesional (PK)
// Nombre
// Apellido
// Matrícula
// Especialidad (FK -> Especialidad.ID_Especialidad)
// Estado (Activo/Inactivo)