import axios from 'axios'

const storeId = '58958138'
const baseUrl = `https://app.ecwid.com/api/v3/${storeId}`
const token = 'public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD'
const ecwidApi = axios.create({
    baseURL: baseUrl,
    headers: {
        "Authorization": `Bearer ${token}`
    }
})

export const getCategories = async () => {
    const response = await ecwidApi.get('/categories')
    return response.data.items
}

export const getCategoryInfo = async (categoryId: number) => {
    const response = await ecwidApi.get(`/categories/${categoryId}`)
    return response.data
}

export const getProductsByCategory = async (categoryId: number) => {
    const url = `${baseUrl}/products?categories=${categoryId}`
    const response = await ecwidApi.get(url)
    return response.data.items
}

export const getProductDetails = async (productId: any) => {
    const url = `${baseUrl}/products/${productId}`
    const response = await ecwidApi.get(url)
    return response.data
}
