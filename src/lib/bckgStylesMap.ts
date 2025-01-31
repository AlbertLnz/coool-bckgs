import SolidColor from '@/bckgs/SolidColor.svelte'
import Grid from '@/bckgs/Grid.svelte'
import Snowflakes from '@/bckgs/Snowflakes.svelte'
import Rain from '@/bckgs/Rain.svelte'
import CirclesLines from '@/bckgs/CircleLines.svelte'
import InfiniteSquare3D from '@/bckgs/InfiniteSquare3D.svelte'
import NeonLines from '@/bckgs/NeonLines.svelte'
import SpeedMotion from '@/bckgs/SpeedMotion.svelte'
import TopLightLines from '@/bckgs/TopLightLines.svelte'
import TubelightGlow from '@/bckgs/TubelightGlow.svelte'
import TerrainPaths from '@/bckgs/TerrainPaths.svelte'
import MagicStars from '@/bckgs/MagicStars.svelte'
import MatrixEffect from '@/bckgs/MatrixEffect.svelte'
import type { SvelteComponent } from 'svelte'

type BckgStyle = {
  name: string
  componentId: string
  component: typeof SvelteComponent<any, any, any>
  description: string
}

const bckgStylesMap: BckgStyle[] = [
  {
    name: 'SolidColor',
    componentId: '.solid-background',
    component: SolidColor,
    description: '',
  },
  {
    name: 'Grid',
    componentId: '.grid-background',
    component: Grid,
    description: '',
  },
  {
    name: 'Snowflakes',
    componentId: '.snowflakes-bckg',
    component: Snowflakes,
    description: '',
  },
  {
    name: 'Rain',
    componentId: '.rain-bckg',
    component: Rain,
    description: "It's raining man!",
  },
  {
    name: 'CirclesLines',
    componentId: '.circle-lines-background',
    component: CirclesLines,
    description: '',
  },
  {
    name: 'InfiniteSquare3d',
    componentId: '.infinite-square-3d',
    component: InfiniteSquare3D,
    description: '',
  },
  {
    name: 'NeonLines',
    componentId: '.neon-lines-background',
    component: NeonLines,
    description: '',
  },
  {
    name: 'SpeedMotion',
    componentId: '.speed-motion-background',
    component: SpeedMotion,
    description: '',
  },
  {
    name: 'TopLightLines',
    componentId: '.top-light-lines-background',
    component: TopLightLines,
    description: '',
  },
  {
    name: 'TubelightGlow',
    componentId: '.tubelight-glow-background',
    component: TubelightGlow,
    description: '',
  },
  {
    name: 'TerrainPaths',
    componentId: '.terrain-paths-background',
    component: TerrainPaths,
    description: '',
  },
  {
    name: 'Magic Stars',
    componentId: '.magic-stars-background',
    component: MagicStars,
    description: '',
  },
  {
    name: 'Matrix Effect',
    componentId: '.matrix-effect-background',
    component: MatrixEffect,
    description: '',
  },
]

export default bckgStylesMap
