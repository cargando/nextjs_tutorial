import Link from 'next/link';
import { withRouter } from 'next/router'
import PageWrapper from '../../components/page_wrapper';


const PostPage = withRouter((props) => {
	const { title } = props.router.query;
	console.log('Art: ', props.router.query);
	const content = title ? (
		<React.Fragment>
			<h4>View ONE Article page</h4>
			<h1>Article about: { title }</h1>
			<br />
			<p>This is the blog post content.</p>
		</React.Fragment>
	) : (
		<React.Fragment>
			<h1>Sorry, no such article: <em>{ title }</em></h1>
		</React.Fragment>
	);
	return (
		<PageWrapper title='ARTICLES / Next.js Tutorial '>
			{ content }
			<Link href="/articles">
				<button className="btn btn-sm btn-outline-secondary">Go Back to the list</button>
			</Link>
		</PageWrapper>
	)
});

export default PostPage;
