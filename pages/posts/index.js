import PageWrapper from '../../components/page_wrapper';
import Link from 'next/link';


const PostLink = (props) => (
	<li>
		<Link href={`/posts/view?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>
);


export default () => (
	<PageWrapper title='POSTS / Next.js Tutorial '>
		<h1>POSTS page</h1>
		<ul>
			<PostLink title="Hello Next.js"/>
			<PostLink title="Learn Next.js is awesome"/>
			<PostLink title="Deploy apps with Zeit"/>
		</ul>
	</PageWrapper>
)