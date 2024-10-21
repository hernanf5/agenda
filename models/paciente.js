import { DataTypes } from "sequelize";
// falta el import de sequelize que es la ruta de conexion a la base de datos

const Paciente = sequelize.define('Paciente', {
    id_paciente: {
        type:DataTypes.INTEGER,
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
    dni: {
        type: DataTypes.STRING,
        allowNull: false
    },
    obra_social: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: 'pacientes',
    timestamps: false
});

export default Paciente