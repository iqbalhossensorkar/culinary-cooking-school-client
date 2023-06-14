export const deleteClass = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/carts/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
    const result = await response.json()
    return result
  }

  export const updateclass = async (classData, id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/class/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('access-token')}`,
      },
      body: JSON.stringify(classData),
    })
  
    const data = await response.json()
    return data
  }