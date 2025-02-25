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
import SunLight from '@/bckgs/SunLight.svelte'
import type { SvelteComponent } from 'svelte'
import GlassEffect from '@/bckgs/GlassEffect.svelte'

type BckgStyle = {
  name: string
  svelteComponent: typeof SvelteComponent<any, any, any>
  description: string
}

const bckgStylesMap: BckgStyle[] = [
  {
    name: 'SolidColor',
    svelteComponent: SolidColor,
    description: '',
  },
  {
    name: 'Grid',
    svelteComponent: Grid,
    description: '',
  },
  {
    name: 'Snowflakes',
    svelteComponent: Snowflakes,
    description: '',
  },
  {
    name: 'Rain',
    svelteComponent: Rain,
    description: "It's raining man!",
  },
  {
    name: 'CirclesLines',
    svelteComponent: CirclesLines,
    description: '',
  },
  {
    name: 'InfiniteSquare3d',
    svelteComponent: InfiniteSquare3D,
    description: '',
  },
  {
    name: 'NeonLines',
    svelteComponent: NeonLines,
    description: '',
  },
  {
    name: 'SpeedMotion',
    svelteComponent: SpeedMotion,
    description: '',
  },
  {
    name: 'TopLightLines',
    svelteComponent: TopLightLines,
    description: '',
  },
  {
    name: 'TubelightGlow',
    svelteComponent: TubelightGlow,
    description: '',
  },
  {
    name: 'TerrainPaths',
    svelteComponent: TerrainPaths,
    description: '',
  },
  {
    name: 'Magic Stars',
    svelteComponent: MagicStars,
    description: '',
  },
  {
    name: 'Matrix Effect',
    svelteComponent: MatrixEffect,
    description: '',
  },
  {
    name: 'Sun Light',
    svelteComponent: SunLight,
    description: '',
  },
  {
    name: 'Glass Effect',
    svelteComponent: GlassEffect,
    description: '',
  },
]

export default bckgStylesMap
