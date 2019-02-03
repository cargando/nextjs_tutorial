import Link from 'next/link';
import { withRouter } from 'next/router'
import PageWrapper from '../../components/page_wrapper';


const PostPage = withRouter((props) => {
	console.log('Router', props.router);
	return (
		<PageWrapper title='POSTS / Next.js Tutorial '>
			<h4>View ONE Post page</h4>
			<h1>Post about: { props.router.query.title }</h1>
			<br />
			<p>This is the blog post content.</p>
			<Link href="/posts">
				<button className="btn btn-sm btn-outline-secondary">Go Back to the list</button>
			</Link>
		</PageWrapper>
	)
});

export default PostPage;
