type Props = {
  showToast: boolean
  componentName: string
  technology: null | 'svelte' | 'tsx' | 'vue'
}

const Toast = ({ showToast, componentName, technology }: Props) => {
  return (
    <div
      class={`${
        showToast ? 'opacity-100' : 'opacity-0'
      } fixed bottom-10 right-10 z-20 w-1/4 h-[60px] pointer-events-none flex items-center justify-center text-center bg-gray-700 py-2 px-4 rounded-xl text-lg transition-all duration-500 ease-in-out`}
    >
      <p>
        '{componentName}.{technology}' copied!
      </p>
    </div>
  )
}

export default Toast
