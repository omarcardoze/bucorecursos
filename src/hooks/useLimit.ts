import { useState, useEffect } from 'react'

export default function useLimit(targetRef: any) {
  const [limit, setLimit] = useState<number>(20)

  if (!targetRef.current) {
    console.log('Target element not found')
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        setLimit((limit) => limit + 20)
      }
    })
    observer.observe(targetRef.current)

    return () => {
      observer.disconnect()
    }
  }, [targetRef])

  return limit
}
