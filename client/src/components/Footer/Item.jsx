import PropTypes from 'prop-types'


const Item = ({ Links, title }) => {
    return (
    <ul>
        <h1 className="mb-1 font-semibold">{title}</h1>
        {Links.map((link) => (
        <li key={link.name}>
            <a
            className="text-sm leading-6 text-gray-400 duration-300 cursor-pointer hover:text-teal-400"
            href={link.link}
            >
            {link.name}
            </a>
        </li>
        ))}
    </ul>
    );
};

Item.propTypes = {
    Links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      })
    ).isRequired,
    title: PropTypes.string.isRequired,
  };

export default Item;
