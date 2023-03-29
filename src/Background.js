export default function Background({ children }) {
    return (
        <div className="mainBackground">
            <div className='outerBox'>
                {children}
            </div>
        </div>
    )
}