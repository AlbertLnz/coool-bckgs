type Props = {
  showToast: boolean
  message: string
}

const Toast = ({ showToast, message }: Props) => {
  return (
    <div
      class={`${
        showToast ? 'opacity-100' : 'opacity-0'
      } absolute bottom-10 right-10 z-20 w-1/4 h-[200px] pointer-events-none bg-red-400 rounded-2xl transition-all duration-500 ease-in-out`}
    >
      {message}
    </div>
  )
}

export default Toast
