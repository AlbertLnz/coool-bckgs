import Grid from '../bckgs/Grid.svelte'
import SolidColor from '../bckgs/SolidColor.svelte'
import type { SvelteComponent } from 'svelte'

type BckgStyle = {
  name: string
  component: typeof SvelteComponent<any, any, any>
}

const bckgStylesMap: BckgStyle[] = [
  {
    name: 'SolidColor',
    component: SolidColor,
  },
  {
    name: 'Grid',
    component: Grid,
  },
]

export default bckgStylesMap
