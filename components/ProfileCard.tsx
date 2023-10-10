'use client'

export default function ProfileCard({ id, email, name, createdAt, updatedAt }: any) {
  return (
    <div className='text-left p-6 border-[1px] rounded-sm bg-slate-50' id='profileCard'>
      <h1 className='font-bold text-center'>Profile</h1>
      <hr className='border-black' />
      <p className=''><b className='font-semibold'>ID:</b> {id}</p>
      <p className=''><b className='font-semibold'>Email:</b> {email}</p>
      <p className=''><b className='font-semibold'>Name:</b> {name}</p>
    </div>
  )
}