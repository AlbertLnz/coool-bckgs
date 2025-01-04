import { useState } from 'preact/hooks'
import SvelteWrapper from '@/components/SvelteWrapper'
import bckgStylesMap from '@/lib/bckgStylesMap'

const BtnChangeBckg = () => {
  const [bckgStyle, setBckgStyle] = useState<null | string>(null)

  return (
    <>
      <section class='grid grid-cols-3 gap-10 p-16'>
        {bckgStylesMap.map((style) => {
          return (
            <article
              className='relative flex items-center justify-center bg-red-800 text-4xl p-2 aspect-video rounded-xl hover:cursor-pointer'
              onClick={() => setBckgStyle(style.name)}
            >
              {style.name}
              <button class='absolute bottom-4 right-4 bg-blue-800 rounded-lg p-3 z-20 text-sm hover:underline'>
                Copy CSS
              </button>
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
