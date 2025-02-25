import { useState } from 'preact/hooks'
import SvelteWrapper from '@/components/SvelteWrapper'
import bckgStylesMap from '@/lib/bckgStylesMap'
import SvelteIcon from '@/assets/SvelteIcon'
import ReactIcon from '@/assets/ReactIcon'
import VueIcon from '@/assets/VueIcon'
import Toast from '@/components/Toast'

const bckgRawFiles = import.meta.glob('/src/bckgs/*.{svelte,tsx,vue}', {
  query: '?raw',
  import: 'default',
})

const BtnChangeBckg = () => {
  const [bckgStyle, setBckgStyle] = useState<null | string>(null)
  const [showToast, setShowToast] = useState({
    show: false,
    message: '',
  })

  async function getRawComponent(
    name: string,
    technology: 'svelte' | 'react' | 'vue'
  ) {
    const filePath = `/src/bckgs/${name}.${technology}`
    if (bckgRawFiles[filePath]) {
      return await bckgRawFiles[filePath]()
    }
    throw new Error(`Component ${name} not found`)
  }

  const handleCopyComponent = async (
    evt: any,
    componentName: string,
    technology: 'svelte' | 'react' | 'vue',
    message: string
  ) => {
    evt.stopPropagation()
    const component = await getRawComponent(componentName, technology)
    console.log(componentName, component)

    setShowToast({ show: true, message })
    setTimeout(() => {
      setShowToast({ show: false, message })
    }, 1500)
  }

  return (
    <>
      <section
        id='bckg-section'
        className='grid grid-cols-3 gap-10 p-16 transition-opacity duration-500'
      >
        <Toast showToast={showToast.show} message={showToast.message} />
        {bckgStylesMap.map((style) => {
          return (
            <article
              className='group relative flex flex-col items-center justify-start bg-zinc-950 shadow-card-shadow p-8 aspect-video rounded-xl hover:cursor-pointer overflow-hidden'
              onClick={() => setBckgStyle(style.name)}
            >
              <div class='absolute top-0 size-full bg-gradient-to-b from-[#242424] via-[#ffffff05] to-transparent'></div>
              <h3 className='text-3xl tracking-wide line-clamp-1 group-hover:scale-150 transition-all duration-300 ease-in-out'>
                {style.name}
              </h3>
              <p className='absolute bottom-0 flex self-center justify-center mb-4 text-white/60 group-hover:hidden transition-all ease-in duration-500'>
                {style.description}
              </p>
              <div className='absolute w-full h-1/2 left-0 bottom-0 grid grid-cols-3 overflow-hidden transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'>
                <button
                  id='svelte'
                  className='group/{svelte} bg-[#FF3E00]/40 rounded-bl-xl flex items-center justify-center'
                  onClick={(evt) =>
                    handleCopyComponent(
                      evt,
                      style.name,
                      'svelte',
                      'Copied Svelte component!'
                    )
                  }
                >
                  <SvelteIcon className='size-10 group-hover/{svelte}:scale-150 transition-all duration-150 ease-in' />
                </button>
                <button
                  id='react'
                  className='group/{react} bg-[#00D8FF]/40 flex items-center justify-center'
                  onClick={(evt) =>
                    handleCopyComponent(
                      evt,
                      style.name,
                      'react',
                      'Copied React component!'
                    )
                  }
                >
                  <ReactIcon className='size-10 group-hover/{react}:scale-150 transition-all duration-150 ease-in' />
                </button>
                <button
                  id='vue'
                  className='group/{vue} bg-[#41B883]/40 rounded-br-xl flex items-center justify-center'
                  onClick={(evt) =>
                    handleCopyComponent(
                      evt,
                      style.name,
                      'vue',
                      'Copied Vue component!'
                    )
                  }
                >
                  <VueIcon className='size-10 group-hover/{vue}:scale-150 transition-all duration-150 ease-in' />
                </button>
              </div>
            </article>
          )
        })}
      </section>

      {bckgStyle && (
        <SvelteWrapper
          component={
            bckgStylesMap.find((style) => style.name === bckgStyle)
              ?.svelteComponent
          }
        />
      )}
    </>
  )
}

export default BtnChangeBckg
