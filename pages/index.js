import Link from 'next/link'
import PageWrapper from '../components/page_wrapper';

const Index = () => (

	<PageWrapper title='Home page / Next.js Tutorial '>

		<h1>Hello: Next.js Tutorial</h1>
		<p>В сложных зимних условиях гармония ездовых свойств стала только ярче.
			Классно настроены мотор с коробкой, переключения незаметны, а контроль тяги предельно точен.
			Разгон ― самый бодрый в трио. Руль очень лёгок даже в «динамическом» режиме,
			но со временем понимаешь всё, что происходит с колёсами. Ягуаровской остроты нет,
			несмотря на спортивную подвеску версии R-design.
		</p>
		<Link href="/about">
			<a>Got to About Page</a>
		</Link>
		<br />
		<Link href="/intro">
			<button>Got to Intro Page</button>
		</Link>
		<style jsx>{`
      h1, a {
        font-family: "Arial";
      }
      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.5;
        text-decoration: underline;
        color: red;
      }
    `}</style>
	</PageWrapper>
);

export default Index
