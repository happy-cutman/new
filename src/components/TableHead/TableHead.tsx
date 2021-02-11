import styles from "./TableHead.module.css";

const TableHead = () => {
    return (
        <div className={styles.TableHead}>
            <div>Trader</div>
            <div>Payment Method</div>
            <div>Rate,$/BTC</div>
            <div>Limit,$</div>
            <div>Actions</div>
        </div>
    );
};

export default TableHead;