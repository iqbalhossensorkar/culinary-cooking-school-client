import { useEffect, useState } from "react";

const useClass = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/approve`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setClasses(data)
                setLoading(false);
            })
    }, [])
    return [classes, loading]
}

export default useClass