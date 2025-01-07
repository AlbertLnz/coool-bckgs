import Grid from '@/bckgs/Grid.svelte'
import SolidColor from '@/bckgs/SolidColor.svelte'
import Snowflakes from '@/bckgs/Snowflakes.svelte'
import Rain from '@/bckgs/Rain.svelte'
import type { SvelteComponent } from 'svelte'

type BckgStyle = {
  name: string
  component: typeof SvelteComponent<any, any, any>
  description: string
}

const bckgStylesMap: BckgStyle[] = [
  {
    name: 'SolidColor',
    component: SolidColor,
    description: '',
  },
  {
    name: 'Grid',
    component: Grid,
    description: '',
  },
  {
    name: 'Snowflakes',
    component: Snowflakes,
    description: '',
  },
  {
    name: 'Rain',
    component: Rain,
    description: '',
  },
]

export default bckgStylesMap
