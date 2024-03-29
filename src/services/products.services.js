const db = require('../models');


const Product = db.products;

const addProducts = (async (payload) => {
    const product = await Product.create(payload);
    return product;
})
const queryFiles = (async (filter, options) => {
    const products = await Product.findAndCountAll({
        filter,
        options,
        where: filter
    })
    return products;
})


const getAllProducts = (async () => {
    let products = await Product.findAll({});
    return products;
})

const getOneProduct = (async (id) => {

    let product = await Product.findOne({ where: { id: id } });
    return product;
})

const updateProduct = (async (body, id) => {
    const getId = id.where.id;
    await Product.update(body, id);
    const result = await getOneProduct(getId);
    return result;
})
module.exports = {
    addProducts,
    getAllProducts,
    getOneProduct,
    updateProduct,
    queryFiles

}