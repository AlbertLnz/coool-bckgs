import { useEffect, useRef } from 'preact/hooks'
import { mount, unmount } from 'svelte'
import type { SvelteComponent } from 'svelte'

type Props<T = {}> = {
  component: typeof SvelteComponent | undefined
  props?: T
}

const SvelteWrapper = ({ component: Component, props }: Props) => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current && Component) {
      const svelteComponent = mount(Component, {
        target: containerRef.current,
        props,
      })

      return () => {
        unmount(svelteComponent)
      }

      // NOTE:
      // · In Svelte 4 -> new Component && component.$destroy()
      // · In Svelte 5 -> mount && unmount
    }
  }, [Component, props])

  return <div ref={containerRef}></div>
}

export default SvelteWrapper
