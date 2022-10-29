import { useState, useEffect } from 'react'

export default function useLimit() {
  const [limit, setLimit] = useState<number>(10)
  useEffect(() => {
    const obsever = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        setLimit((limit) => limit + 10)
      }
    })

    return () => obsever.disconnect()
  }, [])
  return limit
}
