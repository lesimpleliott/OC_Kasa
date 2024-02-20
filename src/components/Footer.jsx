import Logo from "./Logo";

const Footer = () => {
    return (
        <footer>
            <Logo color="#fff" />
            <div className="legal">
                <p>© 2020 Kasa.</p>
                <p>All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
