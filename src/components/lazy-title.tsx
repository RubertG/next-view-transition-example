import React from 'react'


const getOtherTitle = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return "Página Other"
}

export const LazyTitle = async () => {
  const title = await getOtherTitle()
  return (
    <h1
      className="text-2xl text-white mb-2 mt-4"
      style={{
        viewTransitionName: "other"
      }}
    >
      {title}
    </h1>
  )
}
