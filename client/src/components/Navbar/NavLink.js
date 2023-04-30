const NavLink = (link) => {
    return (
        <li>
            <a href={link.url}>{link.title}</a>
        </li>
    );
};

export default NavLink