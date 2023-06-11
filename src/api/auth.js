

export const saveUser = user => {
    // console.log(user);
    const currentUser = {
        email: user.email,
        name: user.displayName,
        role: 'student'
    }
    fetch(`${import.meta.env.VITE_API_URL}/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => console.log(data))
}