import SolidColor from '@/bckgs/SolidColor.svelte'
import Grid from '@/bckgs/Grid.svelte'
import Snowflakes from '@/bckgs/Snowflakes.svelte'
import Rain from '@/bckgs/Rain.svelte'
import CircleLines from '@/bckgs/CircleLines.svelte'
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
  title: string
  componentName: string
  svelteComponent: typeof SvelteComponent<any, any, any>
  description: string
}

const bckgStylesMap: BckgStyle[] = [
  {
    title: 'Solid Color',
    componentName: 'SolidColor',
    svelteComponent: SolidColor,
    description: '',
  },
  {
    title: 'Grid',
    componentName: 'Grid',
    svelteComponent: Grid,
    description: '',
  },
  {
    title: 'Snowflakes',
    componentName: 'Snowflakes',
    svelteComponent: Snowflakes,
    description: '',
  },
  {
    title: 'Rain',
    componentName: 'Rain',
    svelteComponent: Rain,
    description: "It's raining man!",
  },
  {
    title: 'Circles Lines',
    componentName: 'CircleLines',
    svelteComponent: CircleLines,
    description: '',
  },
  {
    title: 'Infinite Square 3d',
    componentName: 'InfiniteSquare3D',
    svelteComponent: InfiniteSquare3D,
    description: '',
  },
  {
    title: 'Neon Lines',
    componentName: 'NeonLines',
    svelteComponent: NeonLines,
    description: '',
  },
  {
    title: 'Speed Motion',
    componentName: 'SpeedMotion',
    svelteComponent: SpeedMotion,
    description: '',
  },
  {
    title: 'Top Light Lines',
    componentName: 'TopLightLines',
    svelteComponent: TopLightLines,
    description: '',
  },
  {
    title: 'Tubelight Glow',
    componentName: 'TubelightGlow',
    svelteComponent: TubelightGlow,
    description: '',
  },
  {
    title: 'Terrain Paths',
    componentName: 'TerrainPaths',
    svelteComponent: TerrainPaths,
    description: '',
  },
  {
    title: 'Magic Stars',
    componentName: 'MagicStars',
    svelteComponent: MagicStars,
    description: '',
  },
  {
    title: 'Matrix Effect',
    componentName: 'MatrixEffect',
    svelteComponent: MatrixEffect,
    description: '',
  },
  {
    title: 'Sun Light',
    componentName: 'SunLight',
    svelteComponent: SunLight,
    description: '',
  },
  {
    title: 'Glass Effect',
    componentName: 'GlassEffect',
    svelteComponent: GlassEffect,
    description: '',
  },
]

export default bckgStylesMap
