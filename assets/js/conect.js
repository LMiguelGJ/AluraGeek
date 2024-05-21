import axios from 'axios';

const baseURL = "https://alura-geek-cyan-two.vercel.app";

// Función para obtener todos los productos
async function getProducts() {
    try {
        const response = await axios.get(`${baseURL}/productos`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        throw error;
    }
}

// Función para crear un nuevo producto
async function createProduct(product) {
    try {
        const response = await axios.post(`${baseURL}/productos`, product);
        return response;
    } catch (error) {
        console.error("Error al crear el producto:", error);
        throw error;
    }
}

// Función para actualizar un producto por su ID
async function updateProduct(id, newData) {
    try {
        const response = await axios.put(`${baseURL}/productos/${id}`, newData);
        return response;
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        throw error;
    }
}

// Función para eliminar un producto por su ID
async function deleteProduct(id) {
    try {
        const response = await axios.delete(`${baseURL}/productos/${id}`);
        return response;
    } catch (error) {
        console.error("Error al eliminar el producto:", error);
        throw error;
    }
}

export const conect = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
};
