import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createBlog, getBlogById, updateBlog } from '../api/blogs';
import {
  TextField,
  Typography,
  Container,
  Box, Alert
} from '@mui/material';
import { LoadingButton } from "@mui/lab";

export default function BlogForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [globalError, setGlobalError] = useState('');

  useEffect(() => {
    if (id) {
      setLoading(true);
      getBlogById(id)
        .then((data) => setFormData({
          title: data.title || '',
          content: data.content || '',
          author: data.author || ''
        }))
        .catch((err) => setGlobalError(err.message))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.content.trim()) newErrors.content = 'Content is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setGlobalError('');
    try {
      if (id) {
        const updateRespone = await updateBlog(id, formData);
        if (updateRespone.statusCode != 201) {
          setGlobalError(updateRespone.message);
        } else {
          navigate('/');
        }
      } else {
        const createResponse = await createBlog(formData);
        if (createResponse.statusCode != 201) {
          setGlobalError(createResponse.message);
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      setGlobalError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          {id ? 'Edit Blog' : 'Create Blog'}
        </Typography>

        {globalError && <Alert severity="error" sx={{ mb: 2 }}>{globalError}</Alert>}

        <form onSubmit={handleSubmit} noValidate>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            error={!!errors.title}
            helperText={errors.title}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            error={!!errors.content}
            helperText={errors.content}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />

          <TextField
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            error={!!errors.author}
            helperText={errors.author}
            fullWidth
            margin="normal"
          />

          <Box mt={3}>
            <LoadingButton
              type="submit"
              variant="contained"
              loading={loading}
              fullWidth
              sx={{ mt: 2 }}
            >
              {id ? 'Update Blog' : 'Create Blog'}
            </LoadingButton>
          </Box>
        </form>
      </Box>
    </Container>
  );
}
