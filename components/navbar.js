import Link from 'next/link';

const linkStyle = {
	marginRight: 15
};

// Для LINK можно задать URL и параметры урла через объект { {pathname:'/second', query: { title:'Title two’} } }
// первые скобки - это общие скобки блока JS, потом объект с 2мя полями pathname и query,
// query - тоже объект, каждое поле - новая переменная.

const Navbar = () => (
	<React.Fragment>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" href="#">Next.JS</a>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link href="/">
							<a className="nav-link">Home </a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/about">
							<a className="nav-link">About</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/intro">
							<a className="nav-link">Intro</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/posts">
							<a className="nav-link">Posts</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/articles">
							<a className="nav-link">Articles</a>
						</Link>
					</li>
					<li className="nav-item">
						<Link href="/moovies">
							<a className="nav-link">Moovies</a>
						</Link>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>
	</React.Fragment>
);

export default Navbar;