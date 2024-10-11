import { DataTypes } from 'sequelize';
import { sequelize } from '../config/sequelize.config.js';

export const Blog = sequelize.define('Blog', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  tag: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
}, {
  tableName: 'my_blogs',
  timestamps: false, 
});
