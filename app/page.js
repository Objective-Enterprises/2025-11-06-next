import Dog from '../components/Dog'

export default async function HomePage() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await response.json()

  return (
    <>
      <Dog image={data.message} />
    </>
  )
}