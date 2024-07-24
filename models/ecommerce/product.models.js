import mongoose from 'mongooose';
import { Category } from './category.models';

const productSchema=new mongoose.Schema({
  description:{
    required:true,
    type:String
  },
  name:{
    required:true,
    type:String
  },
  productImage:{
    type:String
  },
  price:{
    type:Number,
    default:0
  },
  stock:{
    type:Number,
    default:0
  },
  Category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required:true
  },
  Owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    required:true
  }
},{timestamps:true})

export const Product = mongoose.model('Product', productSchema);