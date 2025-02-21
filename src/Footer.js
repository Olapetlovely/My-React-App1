function Footer() {
    const date = new Date()
    return(
            <footer>
                <p>&copy; {date.getFullYear()} Olaide Web Developer</p>
            </footer>
    )
}

export default Footer