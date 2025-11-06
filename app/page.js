import Dog from '../components/Dog'

export default async function HomePage() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await response.json()

  return (
    <>
      <h1>Dog App (Next)</h1>
      <Dog image={data.message} />
    </>
  )
}