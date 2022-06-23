import ReactDOM from 'react-dom';
import style from './Modal.module.scss'

export const Modal = ( { children  } ) => {
    return  ReactDOM.createPortal(
        <div className={style.ModalBackground}>
            { children }
        </div>,
        /* llamamos a nuestro nuevo nodo */
        document.getElementById('modal')
    )
}
