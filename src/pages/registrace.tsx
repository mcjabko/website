import { PageLayout } from '@/layouts/PageLayout'
import { type NextPage } from 'next'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const RegisterPage: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('https://discord.mcjabko.cz')
  }, [])
  return (
    <PageLayout title='' description=''>
      <div>...</div>
    </PageLayout>
  )
}

export default RegisterPage