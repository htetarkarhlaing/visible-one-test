import { SVGProps } from 'react'

const Doc = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='1em'
      height='1em'
      viewBox='0 0 15 15'
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M1 1.5A1.5 1.5 0 0 1 2.5 0h8.207L14 3.293V13.5a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 13.5v-12Zm3 2.497h7v1H4v-1Zm7 2.998H4v1h7v-1ZM11 10H4v1h7v-1Z'
        clipRule='evenodd'
      ></path>
    </svg>
  )
}

export default Doc
