import { DataTypes } from "sequelize";
import Profesional from "./profesional.js";
import Matricula from "./matricula.js";

const Especialidad = sequelize.define('Especialidad', {
    id_especialidad: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado: {
        type: DataTypes.TINYINT,
        allowNull: false
    }
}, {
    tableName: 'especialidad',
    timestamps: false
});

Especialidad.belongsToMany(Profesional, { through: 'matricula', foreignKey: 'id_especialidad' });

export default Especialidad;