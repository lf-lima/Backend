const techModel = require('../infra/models/techModel')

module.exports = {
  async create(data) {
    try {
      const techCreated = await techModel.create(data)

      const tech = await this.findById(techCreated.id)
      return tech
    } catch (error) {
      throw new Error(error)
    }
  },

  async index() {
    try {
      const techs = await techModel.findAll({ order: [['name', 'ASC']] })
      return techs
    } catch (error) {
      throw new Error(error)
    }
  },

  async update(techId, data) {
    try {
      await techModel.update(data, { where: { id: techId } })
      const tech = await this.findById(techId)
      return tech
    } catch (error) {
      throw new Error(error)
    }
  },

  async delete(techId) {
    try {
      await techModel.destroy({ where: { id: techId } })
      return
    } catch (error) {
      throw new Error(error)
    }
  },

  async findById(techId) {
    try {
      console.log('asdasdasdasd')

      const tech = await techModel.findByPk(techId)
      return tech
    } catch (error) {
      throw new Error(error)
    }
  },

  async findByName(name) {
    try {
      const tech = await techModel.findOne({ where: { name } })
      return tech
    } catch (error) {
      throw new Error(error)
    }
  },
}
