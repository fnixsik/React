import { useState } from "react";
import i from "./news.module.css"
const News = () =>{
    const [first, second] = useState(false);

    const activer=() =>{
        
        second(true);
    }
    return(
        <div className={i.post}>
        <p>news</p>
        { first &&
        <p>В Токио на Олимпийских играх-2020 проходит
             1/8 финала соревнований по греко-римской
              борьбе. Казахстанец Мирамбек Айнагулов 
              (до 60 килограммов) в этом раунде 
              встретился на ковре с призером 
              чемпионата мира Жоламаном Шаршенбековым
               (Кыргызстан), передает zakon.kz.</p>
        }
        { !first &&
        
            <button onClick={activer}>close</button>
            
        }
        {   !first &&
            <button onClick={activer}>take me </button>
        }
        </div>
    )
}

export default News;