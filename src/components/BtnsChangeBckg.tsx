import { useState } from 'preact/hooks'
import SvelteWrapper from '@/components/SvelteWrapper'
import bckgStylesMap from '@/lib/bckgStylesMap'
import SvelteIcon from '@/assets/SvelteIcon'
import ReactIcon from '@/assets/ReactIcon'
import VueIcon from '@/assets/VueIcon'

const BtnChangeBckg = () => {
  const [bckgStyle, setBckgStyle] = useState<null | string>(null)

  const handleCopyComponent = (evt: any, style: string, component: string) => {
    evt.stopPropagation()
    console.log(style, component)
  }

  return (
    <>
      <section className='grid grid-cols-3 gap-10 p-16'>
        {bckgStylesMap.map((style) => {
          return (
            <article
              className='group relative flex flex-col items-center justify-start bg-zinc-950 shadow-card-shadow p-8 aspect-video rounded-xl hover:cursor-pointer overflow-hidden'
              onClick={() => setBckgStyle(style.name)}
            >
              <div class='absolute top-0 size-full bg-gradient-to-b from-[#242424] via-[#ffffff05] to-transparent'></div>
              <h3 className='text-3xl tracking-wide line-clamp-1'>
                {style.name}
              </h3>
              <p className='absolute bottom-0 flex self-center justify-center mb-4 text-white/60 group-hover:hidden transition-all ease-in duration-500'>
                {style.description}
              </p>
              <div className='absolute w-full h-1/2 left-0 bottom-0 grid grid-cols-3 overflow-hidden'>
                <button
                  id='svelte'
                  className='bg-[#FF3E00]/40 rounded-bl-xl flex items-center justify-center transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'
                  onClick={(evt) =>
                    handleCopyComponent(evt, style.name, 'svelte')
                  }
                >
                  <SvelteIcon className='size-10' />
                </button>
                <button
                  id='react'
                  className='bg-[#00D8FF]/40 flex items-center justify-center transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'
                  onClick={(evt) =>
                    handleCopyComponent(evt, style.name, 'react')
                  }
                >
                  <ReactIcon className='size-10' />
                </button>
                <button
                  id='vue'
                  className='bg-[#41B883]/40 rounded-br-xl flex items-center justify-center transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'
                  onClick={(evt) => handleCopyComponent(evt, style.name, 'vue')}
                >
                  <VueIcon className='size-10' />
                </button>
              </div>
            </article>
          )
        })}
      </section>

      {bckgStyle && (
        <SvelteWrapper
          component={
            bckgStylesMap.find((style) => style.name === bckgStyle)?.component
          }
        />
      )}
    </>
  )
}

export default BtnChangeBckg
