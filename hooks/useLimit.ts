import { useState, useEffect } from 'react'

export default function useLimit(targetRef: any) {
  const [limit, setLimit] = useState<number>(5)
  useEffect(() => {
    const observer = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        setLimit((limit) => limit + 5)
      }
    })
    observer.observe(targetRef.current)

    return () => observer.disconnect()
  }, [targetRef])

  return limit
}
