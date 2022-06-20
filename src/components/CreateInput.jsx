import style from '../styles/CreateInput.module.scss'

function CreateInput({   
    type,
    placeholder,
    innerRef,
    className,
    }) {

  const cssClassName = className;

  return (
    <input className={style[cssClassName]} 
        ref={innerRef} 
        type={type} 
        placeholder={placeholder}
        />
  )
}

export { CreateInput };