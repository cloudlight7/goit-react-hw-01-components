import PropTypes from 'prop-types';
import CSS from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    return <section className={CSS.statistics}>
        {title && <h2 className={CSS.title}>{title}</h2>}
        <ul className={CSS.statlist}>
            {stats.map(stat => {
                return (
                    <li key={stat.id} className={CSS.item}>
                    <span className={CSS.label}>{stat.label}</span>
                    <span className={CSS.percentage}>{stat.percentage} {'\u0025'}</span>
                    </li>
                )
            }
            )
            }
        </ul>
    </section>
};
Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics