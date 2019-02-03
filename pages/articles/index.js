// Route Masking
import PageWrapper from '../../components/page_wrapper';
import Link from 'next/link';


const ArticleLink = (props) => (
	<li>
		<Link
			as={`/articles/view/${ props.id }`}
			href={`/articles/view?title=${ props.title }`}
		>
			<a>{ props.title }</a>
		</Link>
	</li>
);


export default () => (
	<PageWrapper title='ARTICLES / Next.js Tutorial '>
		<h1>ARTICLES page</h1>
		<ul>
			<ArticleLink title="Intro Next.js" id='intro-nextjs' />
			<ArticleLink title="Become Next.js PRO" id='become-nextjs-pro'/>
			<ArticleLink title="Next.js like a boss" id='nextjs-like-boss'/>
		</ul>
	</PageWrapper>
)