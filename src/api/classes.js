export const deleteRoom = async id => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/carts/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
    const result = await response.json()
    return result
  }