import Link from 'next/link'
import Date from '../components/date'
//import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

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
      <section>
        <h2>Jobba med oss</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis tellus mauris. In magna leo, ornare sed congue congue, dictum ut tortor. Suspendisse potenti. Sed lobortis nibh vel orci lobortis venenatis. Morbi laoreet felis maximus nisi sollicitudin convallis. Vestibulum congue dolor nibh, ut dapibus tellus porta vel. Cras auctor leo a quam tempus, nec lacinia justo vehicula. Mauris maximus consectetur erat, eget mollis arcu placerat ut. Donec id pulvinar arcu. Quisque massa odio, rutrum id condimentum id, venenatis et odio.</p>
        <ul className="list-none">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
  )
}