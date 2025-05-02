 import { productDao } from "../persistance/mongo/dao/product.dao.js";


class ProductServices{
    async getAll(query, options) {
        return await productDao.getAll(query, options)
    };
    async getById (id){
       return  await productDao.getById(id)
    };
    async createProduct(data) {
        return await productDao.create(data)
    }
    async updateProduct(id, data){
        return await productDao.update(id, data)
    }
    async deleteProduct(id){
        return await productDao.deleteOne(id)
    }

}

export const productServices = new ProductServices();