export default function Layout(props) {
    
    const {children} = props

    const header = (
        <header>
            <h1 className="text-gradient">FitForge</h1>
            <p><strong>The 30 simple workouts program</strong></p>
        </header>
    )

    const footer = (
        <footer>
            <p>&copy; {new Date().getFullYear()} FitForge. All rights reserved.<br/><a href = "https://www.fantacss.smoljames.com"
             target="_blank">Fantacss</a></p>
                <p>Built By: Pratyakshya</p>
        </footer>
    )

    return(
        <>
            {header}
            {children}
            {footer}
        </>
    )
}