import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'


const Document = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div class="blog">
          <div class="blogItem">
           <Link href='blogpost/learn-java_script'><h3 className={styles.pointer}>How to learn javascript</h3></Link>
            <p>its a langwage for website</p>
          </div>
          <div class="blogItem">
          <Link href='blogpost/learn-java_script'><h3 className={styles.pointer}>How to learn javascript</h3></Link>
            <p>its a langwage for website</p>
          </div>
          <div class="blogItem">
           <Link href={'/blogpost/learn-java_script'}><h3 className={styles.pointer}>How to learn javascript</h3></Link>
            <p>its a langwage for website</p>
          </div>
          <div class="blogItem">
           <Link href={'/blogpost/learn-java_script'}><h3 className={styles.pointer}>How to learn javascript</h3></Link>
            <p>its a langwage for website</p>
          </div>
        </div>
      </main >
    </div>
  )
}

export default Document