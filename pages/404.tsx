import { Typography } from '@mui/material'
import { NextPage } from 'next'

import { NotFoundPageMainDiv, NotFoundPageBar } from '@/styles/404PageStyles'

export const Custom404: NextPage = () => {
  return (
    <NotFoundPageMainDiv>
      <div>
        <div className="flex items-center justify-center">
          <Typography>404</Typography>

          <NotFoundPageBar />

          <Typography>Page not found</Typography>
        </div>
      </div>
    </NotFoundPageMainDiv>
  )
}

export default Custom404
