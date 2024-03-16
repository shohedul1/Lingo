import { Button } from '@/components/ui/button'
import React from 'react'

const ButtonsPage = () => {
  return (
    <div className='p-4 space-y-4 flex flex-col max-w-[200px] '>
        <Button>Default</Button>
        <Button variant={'primary'}>Primary</Button>
        <Button variant={'primaryOutline'}>Primary Outline</Button>
        <Button variant={'secondary'}>Primary Outline</Button>
        <Button variant={'secondaryOutline'}>Primary Outline</Button>
        <Button variant={'danger'}>Danger</Button>
        <Button variant={'dangerOutline'}>Danger Outline</Button>
        <Button variant={'super'}>Supper</Button>
        <Button variant={'superOutline'}>Super outline</Button>
        <Button variant={'ghost'}>Ghost</Button>
        <Button variant={'sidebar'}>sidebar</Button>
        <Button variant={'sidebarOutline'}>sidebarOutline</Button>









    </div>
  )
}

export default ButtonsPage