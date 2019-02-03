import Link from 'next/link';
import { withRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import PageWrapper from '../../components/page_wrapper';


const ViewMooviePage = withRouter((props) => {
	return (
		<PageWrapper title='POSTS / Next.js Tutorial '>
			<h4>View Mooview Description page</h4>
			<h1>{ props.show.name }</h1>
			<br />
			<p>
				<img src={props.show.image.medium} align="left" style={ { marginRight: '10px', marginBottom: '10px',} }/>
				{
					props.show.summary.replace(/<[/]?p>/g, '')
				}
			</p><br />
			<Link href="/moovies">
				<button className="btn btn-sm btn-outline-secondary">Go Back to the list</button>
			</Link>
		</PageWrapper>
	)
});

ViewMooviePage.getInitialProps = async function (context) {
	const { id } = context.query;
	const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
	const show = await res.json();
	return { show }
};

export default ViewMooviePage;
