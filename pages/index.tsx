import React from 'react'

import { Button, Container, Typography } from '@mui/material'
import { NextPage } from 'next/types'

import { Copyright } from '@/components/Copyright'
import { Link } from '@/components/Link'
import { Meta } from '@/layout/Meta'
import { HomeMain } from '@/styles/homeStyles'

const HomePage: NextPage = () => {
  const handleOnClick = () => {
    window.open('https://github.com/Kidoncio/next-js-material-boilerplate', '_blank')
  }

  return (
    <HomeMain className="flex flex-col">
      <Meta
        title="Next.js boilerplate presentation"
        description="Next.js + Material UI 5 + Tailwind + Styled Components"
      />

      <Container maxWidth="lg">
        <div className="my-8 flex flex-col items-center justify-center">
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js + MUI v5 + Tailwind + Styled Components
          </Typography>

          <Button
            variant="contained"
            color="primary"
            sx={{ marginBottom: '2rem' }}
            onClick={handleOnClick}
          >
            See the code
          </Button>

          <Link href="https://github.com/Kidoncio" color="secondary" sx={{ marginBottom: '2rem' }}>
            More about me
          </Link>

          <Copyright />
        </div>
      </Container>
    </HomeMain>
  )
}

export default HomePage
