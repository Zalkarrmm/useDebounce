import React, { useEffect } from 'react'
import useDebounce from '../../hooks/useDebounce'
const SearchInput = () => {
  const [inputValue, setInputValue] = React.useState('')
  const debouncedInputValue = useDebounce(inputValue,400)
  useEffect(() =>{
    console.log(debouncedInputValue);
    // таак тут получается просто при юзэффекте вызываю функцию при изменении состояния
  },[debouncedInputValue])
  return (
    <div>
      <input type="text" name="" onChange={(e) => setInputValue(e.target.value)} value={inputValue} placeholder='search' id="" />
    </div>
  )
}
export default SearchInput;