import {Link} from 'react-router-dom';

import styles from './TableRow.module.css'


const TableData = () => {
    return (
        <div className={styles.TableData}>
            <div className={styles.User}>
                <span>
					<a href="#/">User</a>
				</span>
            </div>
            <div>Other payment methods</div>
            <div>32307</div>
            <div>15-500</div>
            <div className={styles.Button}>
                <Link to="/Trade">
                    <button>
                        <span>Buy</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TableData;