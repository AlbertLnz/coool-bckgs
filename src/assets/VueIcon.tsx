type Props = {
  className?: string
}

const VueIcon = (props: Props) => {
  return (
    <svg {...props} viewBox='0 0 50 44' fill='none'>
      <g clip-path='url(#vue_a)'>
        <path
          fill='#41B883'
          d='M40 0h10L25 43.125 0 0h19.125L25 10l5.75-10H40Z'
        ></path>
        <path
          fill='#41B883'
          d='m0 0 25 43.125L50 0H40L25 25.875 9.875 0H0Z'
        ></path>
        <path
          fill='#35495E'
          d='M9.875 0 25 26 40 0h-9.25L25 10 19.125 0h-9.25Z'
        ></path>
      </g>
      <defs>
        <clipPath id='vue_a'>
          <path fill='#fff' d='M0 0h50v43.164H0z'></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default VueIcon
