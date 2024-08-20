const IncomeSchema = require("../models/incomeModel");

exports.addIncome = async (req, res) => {
   const {title, amount, category, description, date} = req.body

   const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
   })

   try {
    //validation
        if(!title || !category || !description || !date) {
        return res.status(400).json({message: 'All Fiels are required!'})
        }
        if(amount <= 0 || !amount === 'number') {
        return res.status(400).json({message: 'Amount must be a number'})
        }
        await income.save()
        res.status(200).json({message: 'Income Added'})
    }catch (error) {
    res.status(500).json({message: 'Server Error'})
    }
   console.log(income)
}