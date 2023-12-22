import { PageLayout } from '@/layouts/PageLayout'
import { type NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const RegisterPage: NextPage = () => {
  return (
    <PageLayout title='Registrace' description=''>
      <div className='min-h-screen text-center'>
        <h1 className='text-4xl font-bold'>Registrace jsou do až 2.1.2024  <strong>vypnuty</strong></h1>
        <p className='text-xl mt-5'>Více informací nalezneš na našem discordu <strong><Link href='https://discord.mcjabko.cz'>zde</Link></strong></p>
      </div>
    </PageLayout>
  )
}

export default RegisterPage