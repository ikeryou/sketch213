import './style.css'
import { Block } from './parts/block';


document.querySelectorAll('.js-block').forEach((val,i) => {
  new Block({
    el:val,
    id:i
  })
})



