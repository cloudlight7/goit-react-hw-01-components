import PropTypes from 'prop-types';
import CSS from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <li className={CSS.item}>             
            <span className={isOnline? CSS.online : CSS.offline}></span>
            <img className={CSS.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={CSS.name}>{name}</p>
                    </li>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};