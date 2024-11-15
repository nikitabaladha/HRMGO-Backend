const Joi = require("joi");

const ManageLeaveValidator = Joi.object({
  employeeId: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      "string.pattern.base":
        "Invalid employeeId format (must be a 24 character MongoDB ObjectId)",
      "any.required": "Employee ID is required",
    }),
  leaveType: Joi.string()
    .valid("Casual Leave", "Medical Leave")
    .required()
    .messages({
      "any.only": "Leave type must be one of: Casual Leave or Medical Leave",
      "any.required": "Leave type is required",
    }),
  appliedOn: Joi.date().required().messages({
    "date.base": "Applied on must be a valid date",
    "any.required": "Applied on date is required",
  }),
  startDate: Joi.date().required().messages({
    "date.base": "Start date must be a valid date",
    "any.required": "Start date is required",
  }),
  endDate: Joi.date().min(Joi.ref("startDate")).required().messages({
    "date.base": "End date must be a valid date",
    "date.min": "End date must be on or after the start date",
    "any.required": "End date is required",
  }),
  totalDays: Joi.number().integer().positive().required().messages({
    "number.base": "Total days must be a number",
    "number.integer": "Total days must be an integer",
    "number.positive": "Total days must be a positive number",
    "any.required": "Total days is required",
  }),
  reason: Joi.string().min(5).required().messages({
    "string.base": "Reason must be a string",
    "string.min": "Reason must be at least 5 characters long",
    "any.required": "Reason is required",
  }),
});

module.exports = ManageLeaveValidator;
