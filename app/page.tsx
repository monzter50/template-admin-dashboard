import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Typography from '@design-system/Typhografy'
import Button from '@design-system/Button'
import ButtonGoBack from '@design-system/ButtonGoBack'
import Tooltip from '@design-system/Tooltip';
import Admin from '@/components/layout/admin/Admin';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Admin>
      <div>
        <div>
          <Tooltip title="Heeey">
            <Typography as="h1" size='m'>
              Hola
            </Typography>
          </Tooltip>


          <Typography as="h1" size='s'>
            Hola
          </Typography>
          <Button>Heei</Button>

        </div>
        <ButtonGoBack />
      </div>
    </Admin>



  )
}
