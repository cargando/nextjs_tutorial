import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import PageWrapper from '../../components/page_wrapper';


const MooviesPage = (props) => (
	<PageWrapper title='Moovies on TV'>
		<h1>Batman Moovies:</h1>
		<ul>
			{ //
				props.shows.map((props) => {
					const { show } = props;
					// console.log('Props: ', props);
					return (<li key={show.id}>
						<Link
							as={`/moovies/view/${ show.id }`}
				      href={`/moovies/view?id=${ show.id }`}
						>
							<a>{show.name}</a>
						</Link>
					</li>);
					})
				}
		</ul>
	</PageWrapper>
);

MooviesPage.getInitialProps = async function(props) {

	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
	const data = await res.json();
	console.log(`Show data fetched. Count: ${ data.length }`);
	console.log('Props: ', props);
	return {
		shows: data
	}
};

export default MooviesPage;