import { DataTypes } from "sequelize";
import Profesional from "./profesional.js";
import Especialidad from "./especialidad.js";

const Matricula = sequelize.define('Matricula', {
    id_matricula: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_profesional: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_especialidad: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'matricula',
    timestamps: false
});

Profesional.belongsToMany(Especialidad, { through: 'matricula', foreignKey: 'id_profesional' });
Especialidad.belongsToMany(Profesional, { through: 'matricula', foreignKey: 'id_especialidad' });

export default Matricula;