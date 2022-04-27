
const Header = () => {
    return <header className='header'>
        <img
            src='data:image/png;base64,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'></img>
    </header>
}

export default Header;