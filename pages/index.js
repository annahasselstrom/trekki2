import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Trekki - vi triggas av era utmaningar</title>
      </Head>
      <section>
        <h1>Hej!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis tellus mauris. In magna leo, ornare sed congue congue, dictum ut tortor. Suspendisse potenti. Sed lobortis nibh vel orci lobortis venenatis. Morbi laoreet felis maximus nisi sollicitudin convallis. Vestibulum congue dolor nibh, ut dapibus tellus porta vel. Cras auctor leo a quam tempus, nec lacinia justo vehicula. Mauris maximus consectetur erat, eget mollis arcu placerat ut. Donec id pulvinar arcu. Quisque massa odio, rutrum id condimentum id, venenatis et odio.</p>
      </section>
    </>
  );
}