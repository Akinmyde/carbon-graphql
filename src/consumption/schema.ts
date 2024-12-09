import Joi from 'joi'

export const consumptionSchema = Joi.object({
  startDate: Joi.date().iso().required().messages({
    'date.base': 'Start date must be a valid date.',
    'date.format': 'Start date must be in ISO format.',
  }),
  endDate: Joi.date().iso().min(Joi.ref('startDate')).required().messages({
    'date.base': 'End date must be a valid date.',
    'date.min': 'End date must be greater or equals to the start date.',
  }),
});
