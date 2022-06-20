function CreateInput(
    {
        type,
        placeholder,
        innerRef
    }
    ) {
  return (
    <input className='' ref={innerRef} type={type} placeholder={placeholder} />
  )
}

export { CreateInput };