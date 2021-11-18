
import i from './block.module.css';

const Block =(props) => {
    return (
        <div className={i.BlockOut}>
            <div className={i.BlockPlus}>
            </div>
            <p>{props.name}</p>
            <p>{props.status}</p>
        </div>
    )
}

export default Block;