import { useCallback, useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1)
  }, [setCount])

  return (
    <>
      <div className="text-orange-300">{count}</div>
      <button className="btn btn-success" onClick={handleClick}>Increment</button>
    </>
  )
}

export default Counter