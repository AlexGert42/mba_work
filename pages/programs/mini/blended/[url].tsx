import { apiProgramsReqUrl, backendUrl } from '@/config/index'

import BlendedProgram from '@/components/pages/BlendedProgram'

const programsMiniBlendedProgram = ({ program, programs }) => {
  return <BlendedProgram program={program} />
}

export const getStaticProps = async context => {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const { data } = await res.json()

  const programsFiltered = data.filter(
    item =>
      item.url === context.params.url &&
      item.mbaFormat === 'blended' &&
      item.mbaTypeOfProgram === 'mini'
  )

  const program = programsFiltered[0]

  return {
    props: {
      program,
      programs: data
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${backendUrl}${apiProgramsReqUrl}`)
  const programs = await res.json()

  const urls = programs.data
    .map(program => {
      if (
        program.mbaFormat === 'blended' &&
        program.mbaTypeOfProgram === 'mini'
      ) {
        return { id: program._id, url: program.url && program.url }
      }
    })
    .filter(program => program !== undefined)

  const paths = urls.map(item => ({
    params: { url: item.url.toString() }
  }))

  return {
    paths,
    fallback: false
  }
}

export default programsMiniBlendedProgram
