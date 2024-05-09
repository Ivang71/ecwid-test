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

export const getProductDetails = async (productId: number) => {
    const url = `${baseUrl}/products/${productId}`
    const response = await ecwidApi.get(url)
    return response.data
}

// Add product to local storage cart
export const addToCart = (product: any) => {
    const cart = getCartItems()
    cart.push(product)
    localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify(cart))
}

// Get items from local storage cart
export const getCartItems = (): any[] => {
    const cartString = localStorage.getItem('cart')
    return cartString ? JSON.parse(cartString) : []
}

// Remove item from local storage cart
export const removeFromCart = (productId: number) => {
    const cart = getCartItems()
    const updatedCart = cart.filter((item: any) => item.id !== productId)
    localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify(updatedCart))
}

export const clearCart = () => {
    localStorage.removeItem('cart')
}
