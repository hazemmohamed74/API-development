import userModel from "../../../DB/model/user.model.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { asynchandler,AppError } from "../../utilits/asyncHandlers.js";
import categoryModel from "../../../DB/model/category.model.js";




    export const addCategory = asynchandler(async (req, res, next) => {
        const category = new categoryModel({ name: req.body.name, userId: req.user._id });
        await category.save();
        res.status(201).json(category);
});
    export const getCategory = asynchandler(async (req, res, next) => {
        const categories = await categoryModel.find({ userId: req.user._id });
        res.json(categories);
});
    export const updateCategory =asynchandler( async (req, res, next) => {

    const { newName } = req.body;
    const { categoryId } = req.params;
    const { _id } = req.authUser;
    const category = await categoryModel.findOneAndUpdate({
        _id: categoryId,
        owner: _id
    }, {
        name: newName
    }, { new: true });
    if (!category) {
        return next(new Error('Category not found', { cause: 404 }));
    }
    res.status(200).json({
        success: true,
        message: 'Category updated successfully',
        data: category
    });

});
     export const deleteCategory =asynchandler( async (req, res, next) => {
    
    const { categoryId } = req.params;
   
    const { _id } = req.authUser;
 
    const category = await categoryModel.findOneAndDelete({ _id: categoryId });
    
    const deleteRelatedTasks = await Tasks.deleteMany({ categoryId });
   
    if (!deleteRelatedTasks) {
        return next(new Error('Failed to delete related tasks', { cause: 500 }));
    }
    
    if (!category) {
        return next(new Error('Category not found', { cause: 404 }));
    }
    
    res.status(200).json({
        success: true,
        message: 'category deleted successfully',
        data: category
    })
    })