const { sequelize } = require('../database/db');
const scooterModel = require('../models/scooterModel');

const fs = require('fs');
const path = require('path');

const scooterController = {
    async findDetails(req, res) {
        try {
            let response = await sequelize.query(`
            SELECT
            scooter_model,
            scooter_model_short,
            MIN(scooter_year) AS scooter_year,
            scooter_max_speed,
            scooter_battery_range,
            scooter_max_load,
            scooter_weight,
            scooter_dim_h,
            scooter_dim_w,
            scooter_dim_l,
            scooter_battery_type,
            scooter_battery_capacity,
            scooter_battery_range,
            scooter_charging_time,
            scooter_charger_power,
            scooter_charger_voltage,
            scooter_charger_output,
            scooter_price,
            scooter_description
            
            FROM Scooter 
            WHERE scooter_model_short = '${req.query.modelShort}'
            LIMIT 1`,
                { type: sequelize.QueryTypes.SELECT });

            // extracts the object from the array
            response = response[0];

            // gets every available color for this model os scooter
            let allColors = await sequelize.query(`SELECT DISTINCT scooter_color FROM Scooter WHERE scooter_model_short = '${req.query.modelShort}'`, { type: sequelize.QueryTypes.SELECT });
            console.log(allColors)
            allColors = Object.values(allColors).map(color => color.scooter_color);
            response.allColors = allColors;

            // gets every available model-short of scooter
            let allModelsShort = await sequelize.query(`SELECT DISTINCT scooter_model_short FROM Scooter`, { type: sequelize.QueryTypes.SELECT });
            allModelsShort = Object.values(allModelsShort).map(model => model.scooter_model_short);
            response.allModelsShort = allModelsShort;

            // gets every available model of scooter
            let allModels = [];
            for (let i = 0; i < allModelsShort.length; i++) {
                let model = await sequelize.query(`SELECT DISTINCT scooter_model FROM Scooter WHERE scooter_model_short = '${allModelsShort[i]}'`, { type: sequelize.QueryTypes.SELECT });
                allModels.push(model[0].scooter_model);
            }
            response.allModels = allModels;

            // gets the images of the scooter
            const publicPath = path.join(__dirname, '..', 'public/img/scooters/');
            const files = fs.readdirSync(publicPath);
            let imgs = [];
            for (file of files) {
                // check if file is one of the images of the scooter
                if (file.includes('canyon-elite-scooter')) {
                    imgs.push(file)
                }
            }
            response.imgs = imgs;

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async findAll(req, res) {
        try {
            const response = await scooterModel.findAll();
            return res.status(200).json(files);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async create(req, res) {
        try {
            const response = await scooterModel.create(req.body);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async update(req, res) {
        try {
            const response = await scooterModel.update(req.body, { where: { scooter_id: req.body.scooter_id } });

            if (response == 0) {
                res.status(400).send('Usuário não encontrado')
                return
            }

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async delete(req, res) {
        try {
            const response = await scooterModel.findByPk(req.body.scooter_id);

            if (response == null) {
                res.status(400).send('Scooter não encontrada')
                return
            }

            response.destroy();

            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
};

module.exports = scooterController;
