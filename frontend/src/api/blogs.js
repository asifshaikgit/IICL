const API_URL = import.meta.env.VITE_API_URL;
import { v4 as uuidv4 } from 'uuid';

export const getBlogs = async (page = 1, pageSize = 10, filters = {}) => {
  const params = new URLSearchParams({ page, pageSize, ...filters });
  const res = await fetch(`${API_URL}?request_id=${uuidv4()}&&${params}`);
  if (!res.ok) throw new Error('Failed to fetch blogs');
  return res.json();
};

export const getBlogById = async (id) => {
  const res = await fetch(`${API_URL}/${id}?request_id=${uuidv4()}`);
  if (!res.ok) throw new Error('Failed to fetch blog');
  return res.json();
};

export const createBlog = async (data) => {
  const res = await fetch(`${API_URL}?request_id=${uuidv4()}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateBlog = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}?request_id=${uuidv4()}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteBlog = async (id) => {
  const res = await fetch(`${API_URL}/${id}?request_id=${uuidv4()}`, { method: 'DELETE' });
  return res.json();
};
