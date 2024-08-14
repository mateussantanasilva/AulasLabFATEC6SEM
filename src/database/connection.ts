import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('dbauladsm', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

sequelize
  .authenticate()
  .then(() => console.log('Database connection has successfully!'))
  .catch((error) => {
    console.error('Unable to connect to the database:', error)
    throw error
  })

export { sequelize }
