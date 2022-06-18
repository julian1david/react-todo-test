import style from '../styles/Layout.module.scss'

function Layout({ 
    children, 
    className 
    }) {
    
    console.log(className);
    const cssClassName = className;

    return (
        <div className={`${style[cssClassName]}`}>
            {children}
        </div>
    )
}

export { Layout }