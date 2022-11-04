import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/Image';
/**
 * @list menu items for navbar (nextstage)
 * Home
 * Inbox
 * Search
 * Saved
 * Pipeline
 * Planning
 * Contacts
 * Organizations
 * Reports
 * Timeline
 * ----------
 * Settings
 * Admin
 */

function Navbar({current_page = ""}) {


  return (
    <div className={styles.navbar_container}>
      <div className={styles.logo_font}>Emerging Tech</div>
      <div className={styles.nav_font}>
        <Image src="/home.png" width={30} height={30}/>
        Home
      </div>
      <div className={styles.nav_font}>
        <Image src="/inbox.png" width={30} height={30}/>
        Inbox
      </div>
      <div className={styles.nav_font}>
        <Image src="/search.png" width={30} height={30}/>
        Search
      </div>
      <div className={styles.nav_font}>
        <Image src="/save.png" width={30} height={30}/>
        Saved
      </div>
      <div className={styles.nav_font}>
        <Image src="/pipe.png" width={30} height={30}/>
        Pipeline
      </div>
      <hr className={styles.line_span}></hr>
      <div className={styles.nav_font}>
        <Image src="/settings.png" width={30} height={30}/>
        Settings
      </div>
      <div className={styles.nav_font}>
        <Image src="/admin.png" width={30} height={30}/>
        Admin
      </div>
    </div>
  )
}

export default Navbar