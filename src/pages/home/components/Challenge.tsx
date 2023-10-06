import { useEffect, useState } from 'react'
import axios from 'axios'
import { Button } from '@/components/ui/button'

interface IPost {
  id: number
  title: string
}

const Challenge = () => {
  const URL = (import.meta.env.VITE_POST_URL || '') as string
  const [postList, setPostList] = useState<IPost[]>([])
  const [selectedPost, setSelectedPost] = useState(0)

  const postFetcher = () => {
    axios
      .get(`${URL}/posts`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then((res) => {
        if (res.status === 200) {
          const resData = res.data
          setPostList([
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...resData.map((post: any) => {
              return {
                id: post.id,
                title: post.title,
              }
            }),
          ])
        } else {
          setPostList([
            {
              id: 0,
              title: 'Post not found',
            },
          ])
        }
      })
      .catch((err) => {
        console.log(err)
        setPostList([
          {
            id: 0,
            title: 'Cannot fetch the post list',
          },
        ])
      })
  }

  const addZeroFromStart = (num: number) => {
    return num.toString().padStart(2, '0')
  }

  useEffect(() => {
    postFetcher()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (postList.length > 0) {
      setSelectedPost(postList[0].id)
    }
  }, [postList])

  return (
    <div className='w-full px-20 grid grid-cols-2 h-[700px] gap-4'>
      <div />
      <div className='col-span-1'>
        <h3 className='text-4xl font-bold uppercase text-left py-4'>
          Our <span className='text-[#25A9E0]'>Challenges</span>
        </h3>
      </div>
      <div className='col-span-1' data-aos='fade-right' data-aos-duration='500'>
        <img src='challenges.png' className='w-full h-[500px] object-cover' />
      </div>
      <div data-aos="fade-left" data-aos-duration="500" className='col-span-1 overflow-y-scroll h-[500px]'>
        {postList.map((data, key) => {
          const isSelected = selectedPost === data.id ? true : false
          return (
            <div
              key={key}
              className={`${
                isSelected
                  ? 'bg-gradient-to-r from-[#2EC5E8] to-[#39E6AD]'
                  : 'bg-white'
              } text-black shadow-md my-2 cursor-pointer flex space-x-2 py-4 items-center`}
              onClick={() => setSelectedPost(data.id)}
            >
              <h3
                className={`${
                  isSelected ? 'text-white' : 'text-[#2EC5E8]'
                } text-3xl font-bold px-4`}
              >
                {addZeroFromStart(data.id)}
              </h3>
              <p
                className={`${
                  isSelected ? 'text-white' : 'text-black'
                } block truncate`}
              >
                {data.title}
              </p>
            </div>
          )
        })}
      </div>
      <div />

      <Button className='uppercase w-[200px] text-lg font-semibold p-6 rounded-full bg-gradient-to-r from-[#2EC5E8] to-[#39E6AD] text-white'>
        View More
      </Button>
    </div>
  )
}

export default Challenge
