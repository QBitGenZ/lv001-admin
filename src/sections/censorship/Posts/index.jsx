import React from 'react';
import styles from './index.module.css';
import StatisComPostCencorSection from './Components/statistical_bar';
import Posttable from './Components/table';
export default function PostCencorSection() {
  return (
    <div>
      <h2 className={styles.title}>Kiểm duyệt bài viết</h2>
      <StatisComPostCencorSection/>
      <Posttable/>
    </div>
  );
}
