'use client';

import styles from './Modal.module.scss';

export default function Modal({ title, content, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeBtn}>
          &times;
        </button>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>
          <pre className={styles.text}>{content}</pre>
        </div>
      </div>
    </div>
  );
}
