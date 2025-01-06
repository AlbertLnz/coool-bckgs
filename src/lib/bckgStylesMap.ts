import Grid from '@/bckgs/Grid.svelte'
import SolidColor from '@/bckgs/SolidColor.svelte'
import Snowflakes from '@/bckgs/Snowflakes.svelte'
import Rain from '@/bckgs/Rain.svelte'
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
  {
    name: 'Snowflakes',
    component: Snowflakes,
  },
  {
    name: 'Rain',
    component: Rain,
  },
]

export default bckgStylesMap
