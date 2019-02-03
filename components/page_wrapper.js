import Navbar from '../components/navbar';
import Head from 'next/head';


const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
};

const PageWrapper = (props) => (
	<React.Fragment>
		<Head>
			<title>{ props.title }</title>
			<link
				rel="stylesheet"
				href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
	      integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
				crossOrigin="anonymous"
			/>
		</Head>

		<Navbar />
		<div className='container' style={ { marginTop: '40px' } }>
			{ props.children }
		</div>

	</React.Fragment>
);

export default PageWrapper