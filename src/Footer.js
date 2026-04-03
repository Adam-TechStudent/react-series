const Footer = () => {

    const date = new Date();

    return (
        <footer>
            <p>Copyright &copy; {date.getFullYear()} My App. All rights reserved.</p>
        </footer>
    )
}

export default Footer;