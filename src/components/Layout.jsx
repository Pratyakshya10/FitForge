export default function Layout(props) {
    
    const {children} = props

    const header = (
        <header>
            <h1 className="text-gradient">FitForge</h1>
            <p><strong>The 30 simple workouts program</strong></p>
        </header>
    )

    const footer = (
        <footer className="app-footer">
    <p>
        © 2026 <span>FitForge</span>. All rights reserved.
    </p>

    <p>
        Built by <strong>Pratyakshya</strong>
    </p>

    <a href="https://www.fantacss.smoljames.com/" target="_blank">
        Fantacss
    </a>
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