//import data from './user.json'
import PropTypes from 'prop-types';
import CSS from './Profile.module.css';

const Profile = ({ avatar, location, tag, stats, username }) => {
    return <div className={CSS.profile}>
        <div className={CSS.description}>
            <img
                src={avatar}
                alt="User avatar"
                className={CSS.avatar}
            />
            <p className={CSS.name}>{username}</p>
            <p className={CSS.tag}>{'\u0040'}
                {tag}</p>
            <p className={CSS.location}>{location}</p>
        </div>

        <ul className={CSS.stats}>
            <li className={CSS.element}>
                <span className={CSS.label}>Followers</span>
                <span className={CSS.quantity}>{stats.followers}</span>
            </li>
            <li className={CSS.element}>
                <span className={CSS.label}>Views</span>
                <span className={CSS.quantity}>{stats.views}</span>
            </li>
            <li className={CSS.element}>
                <span className={CSS.label}>Likes</span>
                <span className={CSS.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
};
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
export default Profile