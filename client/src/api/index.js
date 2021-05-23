import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertBlog = payload => api.post(`/blog`, payload)
export const getAllBlogs = () => api.get(`/blogs`)
export const updateBlogById = (id, payload) => api.put(`/blog/${id}`, payload)
export const deleteBlogById = id => api.delete(`/blog/${id}`)
export const getBlogById = id => api.get(`/blog/${id}`)

const apis = {
    insertBlog,
    getAllBlogs,
    updateBlogById,
    deleteBlogById,
    getBlogById,
}

export default apis
