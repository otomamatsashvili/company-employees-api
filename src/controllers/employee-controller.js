import { Employee } from '../models/index.js'

// @desc     Add employee
// @route    POST /employee
// @access   Private
export const addEmployee = async (req, res) => {
  const employee = await Employee.create({
    company: req.body.company,
    name: req.body.name,
    lastName: req.body.lastName,
    startDate: req.body.startDate,
    birthDate: req.body.birthDate,
    personalID: req.body.personalID,
    jobPosition: req.body.jobPosition,
  })
  res.status(200).json(employee)
}

// @desc     Get employee info
// @route    GET /employee/:id
// @access   Private
export const getEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const employee = await Employee.findById(id)
    res.status(200).json(employee)
  } catch (e) {
    res.status(400).json({ error: 'wrong employee id' })
  }
}

// @desc     Update employee
// @route    PUT /employee/:id
// @access   Private
export const updateEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const employee = await Employee.findByIdAndUpdate(
      id,
      {
        company: req.body.company,
        name: req.body.name,
        lastName: req.body.lastName,
        startDate: req.body.startDate,
        birthDate: req.body.birthDate,
        personalID: req.body.personalID,
        jobPosition: req.body.jobPosition,
      },
      {
        new: true,
      }
    )
    res.status(200).json(employee)
  } catch (e) {
    res.status(400).json({ error: 'wrong employee id' })
  }
}

// @desc     Delete employee
// @route    DELETE /employee/:id
// @access   Private
export const deleteEmployee = async (req, res) => {
  const { id } = req.params
  try {
    const employee = await Employee.findByIdAndDelete(id)
    res.status(200).json(employee)
  } catch (e) {
    res.status(400).json({ error: 'wrong employee id' })
  }
}
