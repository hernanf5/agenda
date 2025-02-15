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
    estado: {
        type: DataTypes.TINYINT,
        allowNull: false
    }
}, {
    tableName: 'profesional',
    timestamps: false
});

Profesional.belongsToMany(Especialidad, { through: 'matricula', foreignKey: 'id_profesional' });

export default Profesional;
