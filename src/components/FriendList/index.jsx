import PropTypes from 'prop-types';
import CSS from './FriendsList.module.css';
import FriendListItem from '../FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className={CSS.friendlist}>
            {friends.map(friend => {
                return (
            <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
                    
                );
            }
            )
            }
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};