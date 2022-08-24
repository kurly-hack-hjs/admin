import React from 'react'
import { Header } from '@feature'
import styles from './layout.module.scss'
import { Outlet } from 'react-router-dom'
import Container from '@mui/material/Container'

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Container maxWidth="xl">
        <main className={styles.main}>
          <Outlet />
        </main>
      </Container>
    </div>
  )
}

export default Layout
