let timerId = null;
function useDebounce(value, debounceTime){
    clearTimeout(timerId);
    // вот эту штуку нагулил, он окася предотвращает коллбэк в setTimeout если ему timerId передавать
    timerId = setTimeout(() => {
      console.log(value);
      //  fetch(API/itemsearch=value)
      // .then(response => response.json())
      // .then(res => console.log(res))
    }, debounceTime);
}
export default useDebounce